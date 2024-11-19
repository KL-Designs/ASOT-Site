import { NextRequest, NextResponse } from "next/server"

import Db from '@/lib/mongo'

import client from '@/lib/auth'



export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params
    const { body } = request

    const token = request.cookies.get('token')?.value
    if (!token) return NextResponse.json({ error: 'No Token Found' }, { status: 401 })

    const member = await client.fetchMe(token)
    if (!member) return NextResponse.json({ error: 'No User Found, User may not be in the Discord Server' }, { status: 401 })

    if (!member.hasRoles(['All Staff'])) return NextResponse.json({ error: 'You do not have the authorized roles to access this data' }, { status: 401 })


    switch (slug) {
        case 'members': return GetMembers()
        case 'roles': return GetRoles()
        case 'sections': return GetSections()
        case 'platoons': return GetPlatoons()

        default: return NextResponse.json({ error: 'Invalid Slug' }, { status: 400 })
    }

}



async function GetMembers() {
    const Members = await Db.users.find({}, { projection: { token: 0, oauth: 0 } }).toArray()
    return NextResponse.json(Members, { status: 200 })
}

async function GetRoles() {
    const Roles = await Db.roles.find({}).toArray()
    return NextResponse.json(Roles, { status: 200 })
}

async function GetSections() {
    const Sections = await Db.sections.find({}).toArray()
    return NextResponse.json(Sections, { status: 200 })
}

async function GetPlatoons() {
    const Platoons = await Db.platoons.find({}).toArray()
    return NextResponse.json(Platoons, { status: 200 })
}