import config from "@/config"



export function ExchangeToken(code: string): Promise<User['oauth']> {
    return new Promise((resolve, reject) => {

        fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                client_id: config.discord.client_id,
                client_secret: config.discord.client_secret,
                code: code as string,
                redirect_uri: config.baseUrl + config.discord.redirect_uri,
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) return reject(data)
                resolve(data)
            })

    })
}

export function GetUser(oauth: User['oauth']): Promise<User['discord']> {
    return new Promise((resolve, reject) => {

        fetch('https://discord.com/api/users/@me', {
            headers: {
                authorization: `${oauth.token_type} ${oauth.access_token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.id) return reject(data)
                resolve(data)
            })

    })
}