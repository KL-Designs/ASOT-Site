import { NextRequest, NextResponse } from "next/server"

import client from '@/lib/discord'
import Db from '@/lib/mongo'



export async function GET(request: NextRequest) {

    const type = request.nextUrl.searchParams.get('type') as 'qol' | 'gfx' | 'zeus'
    const id = request.nextUrl.searchParams.get('id') as string

    if (!type || !id) NextResponse.json({ error: 'Missing type or id' }, { status: 400 })

    try {
        const me = await client.fetchMe()

        if (!me.optionals) await Db.users.updateOne({ _id: me._id }, { $set: { optionals: { qol: [], gfx: [], zeus: [] } } })
        const optionals = (await Db.users.findOne({ _id: me._id }))?.optionals!

        if (optionals[type].find(mod => mod.id === id)) return NextResponse.json({ enabled: true }, { status: 200 })
        else return NextResponse.json({ enabled: false }, { status: 200 })
    }

    catch (error: any) {
        console.error('Error:', error)
        return NextResponse.json({ error: 'Internal server error', context: error.message }, { status: 500 })
    }

}