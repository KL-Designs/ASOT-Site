let lastCached = new Date(0)
let rolesCache: GuildRole[] = []



export function GetGuildMember(memberId: string): Promise<GuildMember> {
    return new Promise((resolve, reject) => {

        fetch(`https://discord.com/api/guilds/${process.env.DISCORD_GUILD_ID}/members/${memberId}`, {
            headers: {
                authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) return reject(data)
                resolve(data)
            })

    })
}


export function GetGuildRoles(): Promise<GuildRole[]> {
    return new Promise((resolve, reject) => {

        fetch(`https://discord.com/api/guilds/${process.env.DISCORD_GUILD_ID}/roles`, {
            headers: {
                authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) return reject(data)
                resolve(data)
            })

    })
}


export function GetGuildMemberRoles(memberId: string): Promise<GuildRole[]> {
    return new Promise(async (resolve, reject) => {

        const fetchRoles = new Date().getTime() - lastCached.getTime() > 60000

        const roles = fetchRoles ? await GetGuildRoles() : rolesCache
        if (!roles) return reject('Failed to retrieve roles')

        if (fetchRoles) {
            rolesCache = roles
            lastCached = new Date()
        }


        const member = await GetGuildMember(memberId)
        if (!member) return reject('Failed to retrieve member')

        const memberRoles = roles.filter(role => member.roles.includes(role.id))
        if (!memberRoles) return resolve([])

        return resolve(memberRoles)

    })
}