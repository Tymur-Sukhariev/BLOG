"use server"

import SignUpFormShape from "~/types/SignUpForm";
// import type RegisterUserType from "~/types/RegisterUserType";


export async function registerUser(data:SignUpFormShape) {

    const {firstName, lastName, email, userName, password, repeatPassword} = data;

    if(password !== repeatPassword){
        return({
            errorType: "password"
        })
    }

    //hashing
    const hashedPassword = password;

    const toSend = JSON.stringify({
        firstName, 
        lastName, 
        email, 
        userName, 
        password:hashedPassword, 
    })

    try {
        const fetchResponse = await fetch('http://localhost:3000/api/signUpUser', {
            method: "POST",
            body: toSend,
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include"
        });

        if (!fetchResponse.ok) {
            throw new Error(`Failed to register user`);
        }

                
        // type RegisterUserResponse = {
        //     message: string;
        //     user: RegisterUserType; 
        // }

        const result = await fetchResponse.json();
        return result;
        
        
    } catch (error) {
        console.error("Error in registerUser:", error);
        throw error; 
    }
}
