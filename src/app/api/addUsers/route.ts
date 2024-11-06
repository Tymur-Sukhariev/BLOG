"use server"

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import {hash} from 'bcryptjs'  

const prisma = new PrismaClient();



export async function POST(req:any) {



        const body = await req.json();
        const { firstName, lastName, userName, email, password } = body;
        // const hashedPassword = await hash(password, 12);

    try {
        const newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                userName,
                email,
                password,
                avatar: null,
                subscription: true,
                // firstName: "gjrythr",
                // lastName: "htyhr",
                // userName: "etyrs",
                // email: "89o8iu",
                // password: "lll",
                // avatar: null,
                // subscription: true,
            }
        });

        return NextResponse.json({ message: "Success!!!!!!!", user: newUser });
    } catch (error) {
        console.error("Database error:", error); // Log detailed error
        return NextResponse.json({ message: "User registration failed--------  " }, { status: 500 });
    }
}


// export default async function createUser(){
//     const newUser = await prisma.user.create({
//         data: {
//             firstName: "g",
//             lastName: "h",
//             userName: "kk",
//             email: "g",
//             password: "h",
//             avatar: null,
//             subscription: true,
//         }
//     });
// }
