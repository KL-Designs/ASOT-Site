import { NextRequest, NextResponse } from "next/server"
import { ObjectId } from 'mongodb'
import Db from '@/lib/mongo'
import client from '@/lib/discord'


export async function GET(request: NextRequest) {

    const { searchParams } = new URL(request.url)

    try {
        const missions = await Db.operations.find({}).sort({date: -1}).toArray()
        return NextResponse.json({ missions }, { status: 200 })
    }

    catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 401 })
    }
}