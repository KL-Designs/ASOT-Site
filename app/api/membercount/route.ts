import { NextRequest, NextResponse } from "next/server"


let cache: [number, Date] = [0, new Date(0)]


export async function GET(request: NextRequest) {

    if (new Date().getTime() - cache[1].getTime() >= 1000 * 60 * 30) {

        let count = 0

        const body = await fetch(`https://discord.com/api/guilds/${process.env.DISCORD_GUILD_ID}/members?limit=1000`, {
            headers: {
                authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
                'Content-Type': 'application/json'
            }
        })

        const data = await body.json()

        data.forEach((member: any) => {
            member.roles.includes('1110471500563239012') ? count++ : null
        })

        cache = [count, new Date()]

        console.log('Updated member count:', count)
    }

    return NextResponse.json({ count: cache[0] }, { status: 200 })

}