import type { ObjectId } from "mongodb"


export { }

declare global {

    interface Gallery {
        title: string
        description: string

        created: Date
    }

}