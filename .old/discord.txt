import Db from '@/lib/mongo'



export async function fetchMember(identifier: string): Promise<User> {
    let user = await Db.users.findOne({ $or: [{ _id: identifier }] })
    if (!user) throw new Error('User not found')

    return {
        ...user
    }
}