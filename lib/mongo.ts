import { MongoClient, Collection as MongoCollection } from 'mongodb'



const client = new MongoClient(process.env.MONGO_URI!)
client.connect().catch(console.error)

client.on('connectionReady', () => console.info(`MongoDB Connected with "${process.env.MONGO_URI!}" using "${process.env.MONGO_DB!}"`))



export default {
    stats: () => client.db(process.env.MONGO_DB!).stats().then(console.table).catch(console.error),

    users: client.db(process.env.MONGO_DB!).collection('users') as MongoCollection<User>,
}