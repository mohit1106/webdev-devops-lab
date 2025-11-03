// this is just like express endpoints backend, when inside route.ts file

import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        user: "mohit",
        email: "mohit@gmail.com"
    })
}
export function POST() {
    return NextResponse.json({
        user: "mohitpost",
        email: "mohit@gmail.com"
    })
}