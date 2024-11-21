import 'server-only'

import { cookies } from 'next/headers'
import { GenerateToken } from '@/lib/encryption'
import Db from '@/lib/mongo'



async function request(route: 'members' | 'roles' | (string & {}), route2?: string): Promise<any> {
    let endpoint = `https://discord.com/api/guilds/${process.env.DISCORD_GUILD_ID}/${route}`
    if (route2) endpoint += `/${route2}`

    return await fetch(endpoint, {
        headers: {
            'authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.error) throw new Error(data)
            return data
        })
}


export interface IClient {
    refreshDates: {
        roles: Date
    }

    roles: GuildRole[]
}

interface Member extends User {
    roles: GuildRole[]
    hasRoles: (check: string[]) => boolean
}



export class Client implements IClient {

    refreshDates: IClient['refreshDates']
    roles: IClient['roles']


    constructor() {
        this.refreshDates = {
            roles: new Date()
        }

        this.roles = []
    }



    async refresh() {
        this.roles = await request('roles')

        let memberCount = 0
        const members: GuildMember[] = await request('members?limit=1000')
        for (const member of members) {
            if (!member.roles.includes('1110471500563239012')) continue

            this.refreshMember(member.user.id, member)
            memberCount++
        }

        console.log('Discord Successfully Connected with', memberCount, 'members and', this.roles.length, 'roles cached')
    }

    async refreshMember(id: string, discord?: GuildMember): Promise<User> {
        const user = await Db.users.findOne({ _id: id })
        const member: GuildMember = discord || await request('members', id)
        if (!member.user.id) throw new Error('Discord Member not found, please join the discord server')

        if (!user) {
            const token = GenerateToken()

            const newMember: User = {
                _id: id,
                token,
                discord: member,
                created: new Date(),
                lastEdited: new Date(),
                lastRefreshed: new Date()
            }

            await Db.users.updateOne({ _id: id }, { $set: newMember }, { upsert: true })

            return newMember
        }

        user.discord = member
        user.lastRefreshed = new Date()

        await Db.users.updateOne({ _id: id }, { $set: user })

        return user
    }


    async fetchMe(token?: string): Promise<Member> {
        if (!token) {
            const cookieStore = await cookies()

            token = cookieStore.get('token')?.value
            if (!token) throw new Error('No token found')
        }

        const member = await this.fetchMember(token)
        if (!member) throw new Error('Invalid token')

        return member
    }

    async fetchMember(identifier: string): Promise<Member> {
        let user = await Db.users.findOne({ $or: [{ _id: identifier }, { token: identifier }] })
        if (!user) user = await this.refreshMember(identifier)
        if (!user) throw new Error('User not found')

        if (new Date().getTime() - user.lastRefreshed.getTime() > 1000 * 60 * 5) user = await this.refreshMember(identifier)
        if (new Date().getTime() - this.refreshDates.roles.getTime() > 1000 * 60 * 15) this.roles = await request('roles')

        const roles = this.roles.filter(r => user.discord.roles.includes(r.id))

        return {
            ...user,
            roles,
            hasRoles: (check: string[]) => this.hasRoles(user.discord, check)
        }
    }

    async fetchAllMembers(): Promise<User[]> {
        const members: User[] = await Db.users.find({}).toArray()
        return members
    }


    hasRoles(member: GuildMember, check: string[]): boolean {
        const override = process.env.OVERRIDE?.split(',') || []
        if (override.includes(member.user.id)) return true

        const roles = this.roles.filter(r => member.roles.includes(r.id))

        if (roles.some(r => r.name === 'J4-Administration')) return true
        return roles.some(r => check.includes(r.name))
    }

    fetchRole(identifier: string): GuildRole {
        const index = this.roles.findIndex(r => r.id === identifier || r.name === identifier)
        if (index === -1) throw new Error('Role not found')
        const role = this.roles[index]

        return role
    }

}


const client = new Client()
client.refresh()

export default client