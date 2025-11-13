import { NextRequest, NextResponse } from "next/server"

import client from '@/lib/discord'
import Db from '@/lib/mongo'



export async function GET(request: NextRequest) {

    const type = request.nextUrl.searchParams.get('type') as 'qol' | 'gfx' | 'zeus'
    const id = request.nextUrl.searchParams.get('id') as string
    const mode = request.nextUrl.searchParams.get('mode') as 'check' | 'add' | 'remove'
    const name = request.nextUrl.searchParams.get('name') as string

    if (!type || !id || !mode) NextResponse.json({ error: 'Missing type, id, or mode' }, { status: 400 })

    try {
        const me = await client.fetchMe()
        if (!me) throw new Error('Not logged in')

        if (!me.optionals) await Db.users.updateOne({ _id: me._id }, { $set: { optionals: { qol: [], gfx: [], zeus: [] } } })
        const optionals = (await Db.users.findOne({ _id: me._id }))?.optionals
        if (!optionals) throw new Error('Optionals Config Missing!')

        if (mode === 'check') {
            if (optionals[type].find(mod => mod.id === id)) return NextResponse.json({ enabled: true }, { status: 200 })
            else return NextResponse.json({ enabled: false }, { status: 200 })
        }

        if (mode === 'add') {
            switch (type) {
                case 'qol':
                    Db.users.updateOne({ _id: me._id }, { $addToSet: { 'optionals.qol': { id, name } } })
                    break
                case 'gfx':
                    Db.users.updateOne({ _id: me._id }, { $addToSet: { 'optionals.gfx': { id, name } } })
                    break
                case 'zeus':
                    Db.users.updateOne({ _id: me._id }, { $addToSet: { 'optionals.zeus': { id, name } } })
                    break

                default:
                    throw new Error('Type does not exist')
            }
        }

        if (mode === 'remove') {
            switch (type) {
                case 'qol':
                    Db.users.updateOne({ _id: me._id }, { $pull: { 'optionals.qol': { id } } })
                    break
                case 'gfx':
                    Db.users.updateOne({ _id: me._id }, { $pull: { 'optionals.gfx': { id } } })
                    break
                case 'zeus':
                    Db.users.updateOne({ _id: me._id }, { $pull: { 'optionals.zeus': { id } } })
                    break

                default:
                    throw new Error('Type does not exist')
            }
        }

        return NextResponse.json({ success: true }, { status: 200 })
    }

    catch (error: any) {
        console.error('Error:', error)
        return NextResponse.json({ error: 'Internal server error', context: error.message }, { status: 500 })
    }

}