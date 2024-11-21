import type { ObjectId } from "mongodb"


export { }

declare global {

    interface User {
        _id: string

        token: string

        oauth?: {
            token_type: string
            access_token: string
            expires_in: number
            refresh_token: string
            scope: string
        }

        discord: GuildMember

        created: Date
        lastEdited: Date
        lastRefreshed: Date
    }

    interface OAuthUserResponse {
        id: string
        username: string
        avatar: string
        discriminator: string
        public_flags: number
        flags: number
        banner: string
        accent_color: number
        global_name: string
        avatar_decoration_data: null
        banner_color: string
        clan: null
        mfa_enabled: boolean
        locale: string
        premium_type: number
        email: never
        verified: boolean
    }

}