"use server";

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import type SignUpFormShape from '~/types/SignUpForm';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { firstName, lastName, userName, email, password } = await req.json() as SignUpFormShape;

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

        return NextResponse.json({ message: "Success!!!!!!!", user: newUser });
    } catch (error) {
        console.error("Database error:", error); 
        return NextResponse.json(
            { message: "User registration failed--------" },
            { status: 500 }
        );
    }
}
