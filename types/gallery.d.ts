import type { ObjectId } from "mongodb"


export { }

declare global {

    interface GalleryAPI {
        info: string
        updated: string

        years: {
            year: string

            operations: {
                operation: string

                stages: {
                    stage: string
                    media: string[]
                }[]
            }[]
        }[]
    }

}