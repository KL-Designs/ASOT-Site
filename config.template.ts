export default {
    baseUrl: "http://localhost:3000",

    mongo: {
        uri: "mongodb://127.0.0.1:27017",
        db: "ASOT"
    },

    discord: {
        guild_id: "GUILD_ID",
        client_id: "BOT_CLIENT_ID",
        client_secret: "BOT_OAUTH_SECRET",
        bot_token: "BOT_TOKEN",
        redirect_uri: "/login/callback",
        scope: "identify"
    }
}