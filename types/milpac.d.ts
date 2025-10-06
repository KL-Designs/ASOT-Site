import type { ObjectId } from "mongodb"


export { }

declare global {

    interface Milpac {
        id: string
        title: string
        section: string
    }

}