import * as Discord from 'discord.js'


const GuildID = process.env.DISCORD_GUILD_ID!


const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.GuildPresences,

        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.DirectMessages,
    ],

    partials: [
        Discord.Partials.Channel,
    ]
})


client.login(process.env.DISCORD_BOT_TOKEN).catch(console.error)
client.on('ready', c => console.log(`Discord Logged in as ${c.user?.tag}`))


export default {

    client: client || null,
    guild: () => client.guilds.cache.get(GuildID),
    channel: (data: string): Discord.GuildBasedChannel | undefined => {
        const guild = client.guilds.cache.get(GuildID)
        if (!guild) return undefined
        return guild.channels.cache.get(data) || guild.channels.cache.find(channel => channel.name === data)
    },
    user: (id: string) => { const guild = client.guilds.cache.get(GuildID); return guild?.members.cache.get(id) },

}