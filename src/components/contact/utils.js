
// Simple validation check
export const contactValidation = ({...args}) => {
    const {name, email, message} = args;
    if (name.trim().length === 0 ) return {error: "Name is required", success: null};
    if (email.trim().length === 0 ) return {error: "Email is required", success: null};
    if (message.trim().length === 0 ) return {error: "Message is required", success: null};
    if (name.trim().length < 2 ) return {error: "Name is too short", success: null};
    if (email.trim().length < 5) return {error: "Email is too short", success: null};
    if (!email.includes("@")) return {error: "Not a valid email", success: null}
    if (message.trim().length < 2) return {error: "Message needs to be a 2 characters long", success: null};
    return {error: null, success: "This is just a success demo, please email me or connect with me on Linkedin."}
}

const api = "https://reqres.in/api/users"

// For demonstration purpose
export function sendData(data){
    fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
};