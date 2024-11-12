import type { ObjectId } from "mongodb"


export { }

declare global {

    interface Platoon {
        _id: ObjectId

        name: string
        description: string
        color: string

        sections: Section['_id'][]
    }

    interface Section {
        _id: ObjectId

        name: string
        description: string
        logo: string

        members: {
            user: User['_id']
            role: Role['_id']
        }[]
    }

    interface Role {
        _id: ObjectId

        name: string
        description: string
    }

}