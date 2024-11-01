import type { ObjectId } from "mongodb"


export { }

declare global {

    // interface Permissions {

    // }


    interface User {
        _id: ObjectId

        token: string

        created: Date
        lastEdited: Date

        oauth: {
            token_type: string
            access_token: string
            expires_in: number
            refresh_token: string
            scope: string
        }

        discord: {
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

}