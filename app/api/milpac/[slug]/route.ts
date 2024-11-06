import { NextRequest, NextResponse } from "next/server"

import Db from '@/lib/mongo'

import { Member } from '@/lib/auth'



export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params
    const { body } = request

    const token = request.cookies.get('token')?.value
    if (!token) return NextResponse.json({ error: 'No Token Found' }, { status: 401 })

    const auth = new Member(token)
    await auth.fetchRoles().catch(console.warn)
    if (!auth.roles) return NextResponse.json({ error: 'No Roles Found, User might not be in the Discord Server' }, { status: 401 })

    if (!auth.hasRoles(['J5 - Milpac Staff'])) return NextResponse.json({ error: 'You do not have the authorized roles to access this data' }, { status: 401 })


    switch (slug) {
        case 'members': return GetMembers(body)
        case 'roles': return GetRoles(body)
        case 'sections': return GetSections(body)
        case 'platoons': return GetPlatoons(body)

        default: return NextResponse.json({ error: 'Invalid Slug' }, { status: 400 })
    }

}



async function GetMembers(body: any) {
    const Members = await Db.users.find({}, { projection: { token: 0, oauth: 0 } }).toArray()
    return NextResponse.json(Members, { status: 200 })
}

async function GetRoles(body: any) {
    const Roles = await Db.roles.find({}).toArray()
    return NextResponse.json(Roles, { status: 200 })
}

async function GetSections(body: any) {
    const Sections = await Db.sections.find({}).toArray()
    return NextResponse.json(Sections, { status: 200 })
}

async function GetPlatoons(body: any) {
    const Platoons = await Db.platoons.find({}).toArray()
    return NextResponse.json(Platoons, { status: 200 })
}