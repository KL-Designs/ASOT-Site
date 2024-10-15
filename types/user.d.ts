import type { ObjectId } from "mongodb"


export { }

declare global {

    interface User {
        _id: ObjectId

        email: string
        password: string
        token: string

        created: Date
        lastEdited: Date

        personal: {
            firstName: string
            lastName: string
            phoneNumber: string
            address: string
        }

        auth: {
            admin: boolean
            casa: boolean
        }
    }

}