import { NextRequest, NextResponse } from "next/server"



export async function GET(request: NextRequest) {

    const redirect_uri = `https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID!}&response_type=code&redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_BASEURL! + process.env.DISCORD_REDIRECT_URI!)}&scope=${process.env.DISCORD_SCOPE!.split(' ').join('+')}`

    return NextResponse.redirect(redirect_uri)

}