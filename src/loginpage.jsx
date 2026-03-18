import { useState } from "react"

export function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h1>Login</h1>
            <form>
                <label for='email'>Email: </label>
                <input type="text" id='email'/><br />
                <label for='pass'>Password: </label>
                <input type="text" id='pass'/><br />
                <input type="submit" value="Submit" />
            </form>            
        </div>
    )
}