import type RegisterUserType from "~/types/RegisterUserType";


export async function registerUser(data:RegisterUserType) {

    try {
        const fetchResponse = await fetch('http://localhost:3000/api/addUsers', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!fetchResponse.ok) {
            throw new Error(`Failed to register user`);
        }
        
        type RegisterUserResponse = {
            message: string;
            user: RegisterUserType; 
        }

        const result = (await fetchResponse.json()) as RegisterUserResponse;
        return result;
        
        
    } catch (error) {
        console.error("Error in registerUser:", error);
        throw error; 
    }
}
