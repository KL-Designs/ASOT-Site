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
    roles: Role[]
}

interface Member extends User {
    roles: Role[]
    hasRoles?: (check: string[]) => boolean
}



export class Client implements IClient {

    roles: IClient['roles']


    constructor() {
        this.roles = []
    }


    async updateRoles() {
        this.roles = await Db.roles.find({}).toArray()
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

    async fetchMember(identifier: string, rolesEnabled?: boolean): Promise<Member> {
        const user = await Db.users.findOne({ $or: [{ _id: identifier }, { token: identifier }] })
        if (!user) throw new Error('User not found, please try again later.')

        if (!user.token) {
            user.token = GenerateToken()
            await Db.users.updateOne({ _id: user._id }, { $set: user })
        }

        const roles = this.roles.filter(r => user.guild.roles.includes(r.id))

        return {
            ...user,
            roles,
            hasRoles: rolesEnabled ? (check: string[]) => this.hasRoles(user, check) : undefined
        }
    }

    async fetchAllMembers(): Promise<User[]> {
        const members: User[] = await Db.users.find({}).toArray()
        return members
    }


    hasRoles(member: User, check: string[]): boolean {
        const override = process.env.OVERRIDE?.split(',') || []
        if (override.includes(member.id)) return true

        const roles = this.roles.filter(r => member.guild.roles.includes(r.id))

        if (roles.some(r => r.name === 'J4-Administration')) return true
        return roles.some(r => check.includes(r.name))
    }

    fetchRole(identifier: string): Role {
        const index = this.roles.findIndex(r => r.id === identifier || r.name === identifier)
        if (index === -1) throw new Error('Role not found')
        const role = this.roles[index]

        return role
    }

}


const client = new Client()
client.updateRoles()

export default client