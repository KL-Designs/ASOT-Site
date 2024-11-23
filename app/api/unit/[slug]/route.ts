import { NextRequest, NextResponse } from "next/server"

import { ObjectId } from 'mongodb'
import Db from '@/lib/mongo'

import client from '@/lib/discord'



export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params
    const { body } = request

    const token = request.cookies.get('token')?.value
    if (!token) return NextResponse.json({ error: 'No Token Found' }, { status: 401 })

    const member = await client.fetchMe(token)
    if (!member) return NextResponse.json({ error: 'No User Found, User may not be in the Discord Server' }, { status: 401 })

    if (!member.hasRoles(['All Staff'])) return NextResponse.json({ error: 'You do not have the authorized roles to access this data' }, { status: 401 })


    switch (slug) {
        case 'members': return GetMembers(request)
        case 'ranks': return GetRanks(request)
        case 'roles': return GetRoles()
        case 'sections': return GetSections()
        case 'platoons': return GetPlatoons()

        default: return NextResponse.json({ error: 'Invalid Slug' }, { status: 400 })
    }
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params
    const { body } = request

    const token = request.cookies.get('token')?.value
    if (!token) return NextResponse.json({ error: 'No Token Found' }, { status: 401 })

    const member = await client.fetchMe(token)
    if (!member) return NextResponse.json({ error: 'No User Found, User may not be in the Discord Server' }, { status: 401 })

    if (!member.hasRoles(['J4-Administration'])) return NextResponse.json({ error: 'You do not have the authorized roles to access this data' }, { status: 401 })


    switch (slug) {
        // case 'members': return PostMembers(request)
        case 'ranks': return PostRanks(request)
        // case 'roles': return PostRoles()
        // case 'sections': return PostSections()
        // case 'platoons': return PostPlatoons()

        default: return NextResponse.json({ error: 'Invalid Slug' }, { status: 400 })
    }
}



async function GetMembers(request: NextRequest) {
    const search = request.nextUrl.searchParams.get('search')?.toLocaleLowerCase()
    const member = request.nextUrl.searchParams.get('member')?.toLocaleLowerCase()

    let members: User[]

    if (member) {
        const user = await Db.users.findOne({ _id: member })
        if (user) members = [user]
        else members = []
    }
    else {
        const query = search ? { $or: [{ _id: { $regex: search, $options: 'i' } }, { 'discord.nick': { $regex: search, $options: 'i' } }, { 'discord.user.username': { $regex: search, $options: 'i' } }] } : {}
        members = await Db.users.find(query).toArray()
    }

    return NextResponse.json(members, { status: 200 })
}


async function GetRanks(request: NextRequest) {
    const search = request.nextUrl.searchParams.get('search')?.toLocaleLowerCase()
    const id = request.nextUrl.searchParams.get('id')

    let ranks: Rank[]

    if (id) {
        const rank = await Db.ranks.findOne({ _id: new ObjectId(id) })
        if (rank) ranks = [rank]
        else ranks = []
    }
    else ranks = await Db.ranks.find({ $or: [{ name: { $regex: search, $options: 'i' } }, { abbr: { $regex: search, $options: 'i' } }] }).sort({ order: 1 }).toArray()

    return NextResponse.json(ranks, { status: 200 })
}

async function PostRanks(request: NextRequest) {
    const isJson = request.headers.get('content-type') === 'application/json'

    const id = request.nextUrl.searchParams.get('id')
    const action = request.nextUrl.searchParams.get('action')
    const body = isJson ? await request.json() : {}

    if (action === 'create') {
        await Db.ranks.insertOne({
            _id: new ObjectId(),
            order: 0,
            name: 'New Rank',
            abbr: 'NEW',
            description: '',
            icon: null
        })

        return NextResponse.json({ status: 200 })
    }

    if (id) switch (action) {
        default: Db.ranks.updateOne({ _id: new ObjectId(id) }, { $set: body }, { upsert: true }); break
        case 'delete': Db.ranks.deleteOne({ _id: new ObjectId(id) }); break
        case 'create': break
    }
    else return NextResponse.json({ error: 'No ID Provided' }, { status: 400 })

    return NextResponse.json({ status: 200 })
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