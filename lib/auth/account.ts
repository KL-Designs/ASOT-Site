import Db from '@/lib/mongo'



export function FetchUser(token: string): Promise<User> {
    return new Promise(async (resolve, reject) => {

        const user = await Db.users.findOne({ token })
        if (!user) return reject('Invalid token')

        resolve(user)

    })
}