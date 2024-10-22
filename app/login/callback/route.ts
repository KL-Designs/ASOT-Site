import config from "@/config"

import { NextRequest, NextResponse } from "next/server"

import Db from '@/lib/mongo'
import { ObjectId } from "mongodb"
import { ExchangeToken, GetUser } from "@/lib/oauth/discord"
import { GenerateToken } from "../encryption"



export async function GET(request: NextRequest) {

    const response = NextResponse.redirect(`${config.baseUrl}/account`)

    const code = request.nextUrl.searchParams.get('code')
    if (!code) NextResponse.json({ error: 'No code provided' }, { status: 400 })

    try {
        let token = GenerateToken()

        const TokenExchange = await ExchangeToken(code as string)
        if (!TokenExchange) return NextResponse.json({ error: 'Token exchange failed' }, { status: 400 })

        const User = await GetUser(TokenExchange)
        if (!User) return NextResponse.json({ error: 'User retrieval failed' }, { status: 400 })

        const dbUser = await Db.users.findOne({ 'discord.id': User.id })
        if (!dbUser) await Db.users.insertOne({
            _id: new ObjectId(),

            token: token,

            created: new Date(),
            lastEdited: new Date(),

            oauth: TokenExchange,
            discord: User,
        })
        else token = dbUser.token

        response.cookies.set('token', token, { httpOnly: true, maxAge: 60 * 60 * 24 * 30 })

        return response
    }

    catch (error) {
        console.error('Error:', error)
        return NextResponse.json({ error: 'Internal server error', context: error }, { status: 500 })
    }

}