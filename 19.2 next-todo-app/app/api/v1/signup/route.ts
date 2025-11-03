import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// do singleton prisma client so not to open too many connection to cloud db in dev mode
import prismaClient from "../../../lib/db"

export async function POST(req: NextRequest) {
    // req.body?

    const data = await req.json();
    await prismaClient.user.create({
        data: {
            username: data.username,
            password: data.password
        }
    })
    console.log(data);

    return NextResponse.json({
        message: "You have been signed up"
    })
}



export async function GET(req : NextRequest) {
    const user = await prismaClient.user.findMany();
    return NextResponse.json({ 
        user
    })
}