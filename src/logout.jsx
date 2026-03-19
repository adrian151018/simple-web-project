import { useNavigate } from "react-router";

export function LogOut() {

    const navigate = useNavigate();

    return (
        <button onClick={() => {
            if(confirm("Are you sure you want to log out?"))navigate("/");
        }}>Log Out</button>
    )
}