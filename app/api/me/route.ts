import { NextRequest, NextResponse } from "next/server"
import Db from '@/lib/mongo'
import client from '@/lib/discord'



export async function GET(request: NextRequest) {

    try {
        const me = await client.fetchMe()
        return NextResponse.json({ ...me }, { status: 200 })
    }

    catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 401 })
    }
}