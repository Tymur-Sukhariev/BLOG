"use server";

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import type RegisterUserType from "~/types/RegisterUserType";
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const prisma = new PrismaClient();
const SECRET_KEY = "dab89d8d76e17c392fadbc0501ff89e520834946e13bcfc6a9125f743186b5ffa4c262e96dbc9f6bbee0e5b89c69fa6dfd7b7c2f9f775950a595d3a796385f1e";

function createToken(playload: object, expiresIn: string): string {
    return jwt.sign(playload, SECRET_KEY, { expiresIn });
}

export async function POST(req: Request) {
    try {
        const { firstName, lastName, userName, email, password } = await req.json() as RegisterUserType;

        const newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                userName,
                email,
                password,
                avatar: null,
                subscription: true,
            },
        });

        // // const token = createToken({ email }, "1h");
        // const token = "token";

        // const cookieOptions: cookie.SerializeOptions = {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === 'production', 
        //     sameSite: 'strict',
        //     path: '/',
        //     maxAge: 3600, 
        // };

        // const serializedCookie = cookie.serialize('auth_token', token, cookieOptions);

        // const response = NextResponse.json({ message: "User registered successfully", user: newUser });
        const response = NextResponse.json({ message: "POST registered successfully", user: newUser });
        // response.headers.set('Set-Cookie', serializedCookie);

        return response;

    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json(
            { message: "User registration failed--------" },
            { status: 500 }
        );
    }
}
