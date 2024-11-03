import 'server-only'

import { cookies } from 'next/headers'
import Db from '@/lib/mongo'


const discordAPI = `https://discord.com/api/guilds/${process.env.DISCORD_GUILD_ID}`

let cache: {
    users: (GuildMember & { expires: Date })[]
    roles: [GuildRole[], Date]
}



export class Member {

    private token: string

    user: User
    discord: GuildMember
    roles: GuildRole[]


    constructor(token?: string) {
        this.token = token || null!

        this.user = null!
        this.discord = null!
        this.roles = null!
    }

    

    private async fetchToken(): Promise<string> {
        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value

        if (!token) throw new Error('No token found')
        this.token = token
        return token
    }


    async fetchUser(): Promise<Member> {
        if (!this.token) await this.fetchToken()

        this.user = await Db.users.findOne({ token: this.token }) as User
        if (!this.user) throw new Error('Invalid token')

        return this
    }


    async fetchDiscord(): Promise<GuildMember> {
        if (!this.user) await this.fetchUser()

        this.discord = await fetch(`${discordAPI}/members/${this.user.discord.id}`, {
            headers: {
                authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) throw new Error(data)
                return data
            })


        if (!this.discord) throw new Error('Member not found')
        return this.discord
    }


    async fetchRoles(): Promise<GuildRole[]> {
        if (!this.discord) await this.fetchDiscord()

        const allRoles: GuildRole[] = await fetch(`${discordAPI}/roles`, {
            headers: {
                authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) throw new Error(data)
                return data
            })


        this.roles = allRoles.filter(role => this.discord.roles.includes(role.id))

        if (!this.roles) throw new Error('Roles not found')
        return this.roles
    }



    hasRoles(check: string[]): boolean {
        return this.roles.some(r => check.includes(r.name))
    }

}