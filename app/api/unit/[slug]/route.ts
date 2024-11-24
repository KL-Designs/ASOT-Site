import { NextRequest, NextResponse } from "next/server"

import { ObjectId } from 'mongodb'
import Db from '@/lib/mongo'

import client from '@/lib/discord'



export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params

    const token = request.cookies.get('token')?.value
    if (!token) return NextResponse.json({ error: 'No Token Found' }, { status: 401 })

    const member = await client.fetchMe(token)
    if (!member) return NextResponse.json({ error: 'No User Found, User may not be in the Discord Server' }, { status: 401 })

    if (!member.hasRoles(['All Staff'])) return NextResponse.json({ error: 'You do not have the authorized roles to access this data' }, { status: 401 })


    switch (slug) {
        case 'members': return GetMembers(request)
        case 'ranks': return GetRanks(request)
        case 'roles': return GetRoles(request)
        case 'sections': return GetSections(request)
        case 'platoons': return GetPlatoons(request)
        case 'certifications': return GetCertifications(request)
        case 'awards': return GetAwards(request)

        default: return NextResponse.json({ error: 'Invalid Slug' }, { status: 400 })
    }
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params

    const token = request.cookies.get('token')?.value
    if (!token) return NextResponse.json({ error: 'No Token Found' }, { status: 401 })

    const member = await client.fetchMe(token)
    if (!member) return NextResponse.json({ error: 'No User Found, User may not be in the Discord Server' }, { status: 401 })

    if (!member.hasRoles(['J4-Administration'])) return NextResponse.json({ error: 'You do not have the authorized roles to access this data' }, { status: 401 })


    switch (slug) {
        // case 'members': return PostMembers(request)
        case 'ranks': return PostRanks(request)
        case 'roles': return PostRoles(request)
        case 'sections': return PostSections(request)
        case 'platoons': return PostPlatoons(request)
        case 'certifications': return PostCertifications(request)
        case 'awards': return PostAwards(request)

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


async function GetRoles(request: NextRequest) {
    const search = request.nextUrl.searchParams.get('search')?.toLocaleLowerCase()
    const id = request.nextUrl.searchParams.get('id')

    let roles: Role[]

    if (id) {
        const role = await Db.roles.findOne({ _id: new ObjectId(id) })
        if (role) roles = [role]
        else roles = []
    }
    else roles = await Db.roles.find({ $or: [{ name: { $regex: search, $options: 'i' } }, { abbr: { $regex: search, $options: 'i' } }] }).sort({ order: 1 }).toArray()

    return NextResponse.json(roles, { status: 200 })
}

async function PostRoles(request: NextRequest) {
    const isJson = request.headers.get('content-type') === 'application/json'

    const id = request.nextUrl.searchParams.get('id')
    const action = request.nextUrl.searchParams.get('action')
    const body = isJson ? await request.json() : {}

    if (action === 'create') {
        await Db.roles.insertOne({
            _id: new ObjectId(),
            order: 0,
            name: 'New Role',
            abbr: 'NEW',
            description: ''
        })

        return NextResponse.json({ status: 200 })
    }

    if (id) switch (action) {
        default: Db.roles.updateOne({ _id: new ObjectId(id) }, { $set: body }, { upsert: true }); break
        case 'delete': Db.roles.deleteOne({ _id: new ObjectId(id) }); break
        case 'create': break
    }
    else return NextResponse.json({ error: 'No ID Provided' }, { status: 400 })

    return NextResponse.json({ status: 200 })
}


async function GetSections(request: NextRequest) {
    const search = request.nextUrl.searchParams.get('search')?.toLocaleLowerCase()
    const id = request.nextUrl.searchParams.get('id')

    let sections: Section[]

    if (id) {
        const section = await Db.sections.findOne({ _id: new ObjectId(id) })
        if (section) sections = [section]
        else sections = []
    }
    else sections = await Db.sections.find({ name: { $regex: search, $options: 'i' } }).sort({ order: 1 }).toArray()

    return NextResponse.json(sections, { status: 200 })
}

async function PostSections(request: NextRequest) {
    const isJson = request.headers.get('content-type') === 'application/json'

    const id = request.nextUrl.searchParams.get('id')
    const action = request.nextUrl.searchParams.get('action')
    const body = isJson ? await request.json() : {}

    if (action === 'create') {
        await Db.sections.insertOne({
            _id: new ObjectId(),
            order: 0,
            name: 'New Section',
            description: '',
            color: '#000000',
            icon: null,
            members: []
        })

        return NextResponse.json({ status: 200 })
    }

    if (id) switch (action) {
        default: Db.sections.updateOne({ _id: new ObjectId(id) }, { $set: body }, { upsert: true }); break
        case 'delete': Db.sections.deleteOne({ _id: new ObjectId(id) }); break
        case 'create': break
    }
    else return NextResponse.json({ error: 'No ID Provided' }, { status: 400 })

    return NextResponse.json({ status: 200 })
}


async function GetPlatoons(request: NextRequest) {
    const search = request.nextUrl.searchParams.get('search')?.toLocaleLowerCase()
    const id = request.nextUrl.searchParams.get('id')

    let platoons: Platoon[]

    if (id) {
        const platoon = await Db.platoons.findOne({ _id: new ObjectId(id) })
        if (platoon) platoons = [platoon]
        else platoons = []
    }
    else platoons = await Db.platoons.find({ name: { $regex: search, $options: 'i' } }).sort({ order: 1 }).toArray()

    return NextResponse.json(platoons, { status: 200 })
}

async function PostPlatoons(request: NextRequest) {
    const isJson = request.headers.get('content-type') === 'application/json'

    const id = request.nextUrl.searchParams.get('id')
    const action = request.nextUrl.searchParams.get('action')
    const body = isJson ? await request.json() : {}

    if (action === 'create') {
        await Db.platoons.insertOne({
            _id: new ObjectId(),
            order: 0,
            name: 'New Platoon',
            description: '',
            color: '#000000',
            sections: []
        })

        return NextResponse.json({ status: 200 })
    }

    if (id) switch (action) {
        default: Db.platoons.updateOne({ _id: new ObjectId(id) }, { $set: body }, { upsert: true }); break
        case 'delete': Db.platoons.deleteOne({ _id: new ObjectId(id) }); break
        case 'create': break
    }
    else return NextResponse.json({ error: 'No ID Provided' }, { status: 400 })

    return NextResponse.json({ status: 200 })
}


async function GetCertifications(request: NextRequest) {
    const search = request.nextUrl.searchParams.get('search')?.toLocaleLowerCase()
    const id = request.nextUrl.searchParams.get('id')

    let certifications: Certification[]

    if (id) {
        const certification = await Db.certifications.findOne({ _id: new ObjectId(id) })
        if (certification) certifications = [certification]
        else certifications = []
    }
    else certifications = await Db.certifications.find({ name: { $regex: search, $options: 'i' } }).sort({ order: 1 }).toArray()

    return NextResponse.json(certifications, { status: 200 })
}

async function PostCertifications(request: NextRequest) {
    const isJson = request.headers.get('content-type') === 'application/json'

    const id = request.nextUrl.searchParams.get('id')
    const action = request.nextUrl.searchParams.get('action')
    const body = isJson ? await request.json() : {}

    if (action === 'create') {
        await Db.certifications.insertOne({
            _id: new ObjectId(),
            name: 'New Certification',
            description: ''
        })

        return NextResponse.json({ status: 200 })
    }

    if (id) switch (action) {
        default: Db.certifications.updateOne({ _id: new ObjectId(id) }, { $set: body }, { upsert: true }); break
        case 'delete': Db.certifications.deleteOne({ _id: new ObjectId(id) }); break
        case 'create': break
    }
    else return NextResponse.json({ error: 'No ID Provided' }, { status: 400 })

    return NextResponse.json({ status: 200 })
}


async function GetAwards(request: NextRequest) {
    const search = request.nextUrl.searchParams.get('search')?.toLocaleLowerCase()
    const id = request.nextUrl.searchParams.get('id')

    let awards: Award[]

    if (id) {
        const award = await Db.awards.findOne({ _id: new ObjectId(id) })
        if (award) awards = [award]
        else awards = []
    }
    else awards = await Db.awards.find({ name: { $regex: search, $options: 'i' } }).sort({ order: 1 }).toArray()

    return NextResponse.json(awards, { status: 200 })
}

async function PostAwards(request: NextRequest) {
    const isJson = request.headers.get('content-type') === 'application/json'

    const id = request.nextUrl.searchParams.get('id')
    const action = request.nextUrl.searchParams.get('action')
    const body = isJson ? await request.json() : {}

    if (action === 'create') {
        await Db.awards.insertOne({
            _id: new ObjectId(),
            name: 'New Award',
            description: ''
        })

        return NextResponse.json({ status: 200 })
    }

    if (id) switch (action) {
        default: Db.awards.updateOne({ _id: new ObjectId(id) }, { $set: body }, { upsert: true }); break
        case 'delete': Db.awards.deleteOne({ _id: new ObjectId(id) }); break
        case 'create': break
    }
    else return NextResponse.json({ error: 'No ID Provided' }, { status: 400 })

    return NextResponse.json({ status: 200 })
}