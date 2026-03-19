import { useNavigate } from "react-router";

export function LoginPage(){

    const navigate = useNavigate();

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={
                (event) => {
                    event.preventDefault();
                    const formValues = new FormData(event.target);
                    if(formValues.get("pass").length >= 6){
                        navigate("/listitems");
                    }   
                }
            }>
                <label htmlFor='email'>Email: </label>
                <input type="email" required id='email' name='email'/><br />

                <label htmlFor='pass'>Password: </label>
                <input type="password" required id='pass' name='pass'/><br />

                <input type="submit" value="Submit" />
            </form>            
        </div>
    )
}