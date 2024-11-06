


export async function registerUser(data:any) {


    // const sendData = {
    //     firstName:"data",
    //     lastName:"data",
    //     userName:"data",
    //     email:"data",
    //     password:"data",
    // }

    try {
        const fetchResponse = await fetch('http://localhost:3000/api/addUsers', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Log the status and response text
        console.log('Response status:', fetchResponse.status);
        const responseText = await fetchResponse.text(); // Read response as text
        console.log('Response body:', responseText); // Log response body

        // Check if response is OK
        if (!fetchResponse.ok) {
            throw new Error(`Failed to register user: ${responseText}`);
        }

        // Parse the JSON response
        const result = JSON.parse(responseText); // Parse the response text as JSON
        return result;
    } catch (error) {
        console.error("Error in registerUser:", error);
        throw error; // Re-throw the error for handling in the mutation
    }
}
