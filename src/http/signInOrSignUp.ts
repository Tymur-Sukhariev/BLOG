export async function signInRequest(data, action: string){

        const {email, password} = data;
        //hasing
        const hashedPassword = password;
        const toSend = JSON.stringify({email, hashedPassword, action})
        
        fetch("http://localhost:3000/api/auth/callback/credentials", {
            method: "POST",
            body: toSend,
            headers: {
                "Content-Type": "application/json",
              }
        })

}