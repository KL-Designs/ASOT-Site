import config from '@/config'
import { MongoClient, Collection as MongoCollection } from 'mongodb'



const client = new MongoClient(config.mongo.uri)
client.connect().catch(console.error)

client.on('connectionReady', () => console.info(`MongoDB Connected with "${config.mongo.uri}" using "${config.mongo.db}"`))



export default {
    stats: () => client.db(config.mongo.db).stats().then(console.table).catch(console.error),

    users: client.db(config.mongo.db).collection('users') as MongoCollection<User>,
}