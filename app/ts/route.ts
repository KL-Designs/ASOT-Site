import { NextRequest, NextResponse } from "next/server"

export function GET(request: NextRequest) {
    return NextResponse.redirect("ts3server://ts.asotmilsim.com")
}