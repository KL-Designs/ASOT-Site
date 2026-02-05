import { NextRequest, NextResponse } from "next/server"
import { ObjectId } from 'mongodb'
import Db from '@/lib/mongo'
import client from '@/lib/discord'


export async function GET(request: NextRequest) {

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const title = searchParams.get('title')
    const date = searchParams.get('date')
    const loreDate = searchParams.get('loreDate')

    if (!id) return NextResponse.json({ error: 'Operation ID Missing' }, { status: 401 })

    try {
        const me = await client.fetchMe()
        if (!client.hasRoles(me, ['HQ Staff'])) return NextResponse.json({ error: 'Access Denied' }, { status: 403 })

        if (title) await Db.operations.updateOne({ _id: new ObjectId(id) }, { $set: { title: title } })
        if (date) await Db.operations.updateOne({ _id: new ObjectId(id) }, { $set: { date: new Date(date) } })
        if (loreDate) await Db.operations.updateOne({ _id: new ObjectId(id) }, { $set: { loreDate: new Date(loreDate) } })

        return NextResponse.json({ success: true }, { status: 200 })
    }

    catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 401 })
    }
}