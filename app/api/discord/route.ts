import { NextRequest, NextResponse } from "next/server"

import { GetGuildMemberRoles } from '@/lib/discord/roles'



export async function GET(request: NextRequest) {

    // try {

    //     const memberId = request.nextUrl.searchParams.get('id')
    //     if (!memberId) throw new Error('Missing member ID')

    //     const GuildMember = await GetGuildMemberRoles(memberId)
    //     if (!GuildMember) throw new Error('Failed to retrieve member roles')

    //     return NextResponse.json(GuildMember, { status: 200 })

    // }

    // catch (error) {
    //     console.error('Error:', error)
    //     return NextResponse.json({ error: 'Internal server error', context: 'error' }, { status: 500 })
    // }

}