import { PrismaClient } from "@prisma/client";
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET(){
    const posts = await prisma.post.findMany();
    const response = NextResponse.json(posts);

    console.log(response);
    

    return response;

}