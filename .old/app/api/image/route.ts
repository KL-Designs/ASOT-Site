import { NextRequest, NextResponse } from "next/server"
import fs from 'fs'



const MimeTypes: { [key: string]: string } = {
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'webp': 'image/webp',
    'bmp': 'image/bmp',
    'tiff': 'image/tiff',
    'ico': 'image/x-icon',
    // Add more MIME types as needed
}


export async function GET(request: NextRequest) {

    // const type = request.nextUrl.searchParams.get('type')
    // if (!type) return NextResponse.json({ error: 'No type provided' }, { status: 400 })

    const file = request.nextUrl.searchParams.get('file')
    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

    const fileData = fs.readFileSync(`./.uploads/${file}`)
    if (!fileData) return NextResponse.json({ error: 'File not found' }, { status: 404 })

    const mimeType = MimeTypes[file.split('.').pop() || 'webp']


    const response = new NextResponse(fileData, {
        headers: {
            'Content-Type': mimeType,
            'Content-Disposition': `inline; filename=${file}`
        }
    })

    return response

}