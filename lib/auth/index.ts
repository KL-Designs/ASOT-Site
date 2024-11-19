import 'server-only'

import { cookies } from 'next/headers'
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



export class Client {

    members: {
        user: User,
        discord: GuildMember,
        roles: GuildRole[],
        hasRoles: (roles: string[]) => boolean,
        date: Date
    }[]

    roles: {
        role: GuildRole,
        date: Date
    }[]


    constructor() {
        this.members = []
        this.roles = []
    }



    async refresh() {
        this.members = []
        this.roles = []

        const roles = await request('roles')
        for (const role of roles) {
            this.roles.push({ role, date: new Date() })
        }

        const members: GuildMember[] = await request('members?limit=1000')
        for (const member of members) {
            if (!member.roles.includes('1110471500563239012')) continue

            const user = await Db.users.findOne({ 'discord.id': member.user.id })
            if (!user) continue

            const roles = this.roles.filter(r => member.roles.includes(r.role.id)).map(r => r.role)

            this.members.push({ user, discord: member, roles, hasRoles: (roles: string[]) => this.hasRoles(member, roles), date: new Date() })
        }

        console.log('Discord Successfully Connected with', this.members.length, 'members and', this.roles.length, 'roles cached')
    }


    async fetchMe(token?: string): Promise<{ user: User, discord: GuildMember, roles: GuildRole[], hasRoles: (roles: string[]) => boolean }> {
        if (!token) {
            const cookieStore = await cookies()

            token = cookieStore.get('token')?.value
            if (!token) throw new Error('No token found')
        }

        const member = await this.fetchMember({ token })
        if (!member) throw new Error('Invalid token')

        return member
    }

    async fetchMember({ id, token }: { id?: string, token?: string }): Promise<{ user: User, discord: GuildMember, roles: GuildRole[], hasRoles: (roles: string[]) => boolean }> {
        const index = this.members.findIndex(m => m.user.discord.id === id || m.user.token === token)
        const member = this.members[index]

        if (!member) {
            const user = await Db.users.findOne({ $or: [{ 'discord.id': id }, { token }] })
            if (!user) throw new Error('Db User not found')

            const member = await request('members', user.discord.id)
            if (!member) throw new Error('Discord Member not found')

            const roles = this.roles.filter(r => member.roles.includes(r.role.id)).map(r => r.role)

            this.members.push({ user, discord: member, roles, hasRoles: (roles: string[]) => this.hasRoles(member, roles), date: new Date() })
            console.log('Member Cached:', user.discord.id)
            return { user, discord: member, roles, hasRoles: (roles: string[]) => this.hasRoles(member, roles) }
        }

        if (new Date().getTime() - member.date.getTime() > 1000 * 60 * 10) {
            const user = await Db.users.findOne({ $or: [{ 'discord.id': id }, { token }] })
            if (!user) throw new Error('Db User not found')

            const member = await request('members', user.discord.id)
            if (!member) throw new Error('Discord Member not found')

            const roles = this.roles.filter(r => member.roles.includes(r.role.id)).map(r => r.role)

            this.members[index] = { user, discord: member, roles, hasRoles: (roles: string[]) => this.hasRoles(member, roles), date: new Date() }
            console.log('Member Refreshed:', user.discord.id)
            return { user, discord: member, roles, hasRoles: (roles: string[]) => this.hasRoles(member, roles) }
        }


        const roles = this.roles.filter(r => member.discord.roles.includes(r.role.id)).map(r => r.role)


        return {
            user: member.user,
            discord: member.discord,
            roles,
            hasRoles: (roles: string[]) => this.hasRoles(member.discord, roles)
        }
    }


    hasRoles(member: GuildMember, check: string[]): boolean {
        const override = process.env.OVERRIDE?.split(',') || []
        if (override.includes(member.user.id)) return true

        const roles = this.roles.filter(r => member.roles.includes(r.role.id))

        if (roles.some(r => r.role.name === 'J4-Administration')) return true
        return roles.some(r => check.includes(r.role.name))
    }

    async fetchRole({ id, name }: { id?: string, name?: string }) {
        const index = this.roles.findIndex(r => r.role.id === id || r.role.name === name)
        const role = this.roles[index]

        if (!role) {
            const role = await request('roles', id)
            if (!role) throw new Error('Role not found')

            this.roles.push({ role, date: new Date() })
            console.log('Role Cached:', role.id)
            return role
        }

        if (new Date().getTime() - role.date.getTime() > 1000 * 60 * 10) {
            const role = await request('roles', id)
            this.roles[index] = { role, date: new Date() }
            console.log('Role Refreshed:', role.id)
            return role
        }

        return role.role
    }

}


const client = new Client()
client.refresh()

export default client