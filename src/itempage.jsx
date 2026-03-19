import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { LogOut } from "./logout";

export function ItemPage() {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(jsonItem => setItem(jsonItem));
    }, []);

    return (
        <div>
            <LogOut />
            <h1>Title: </h1>
            <h4>{item.title}</h4>
            <h1>Body: </h1>
            <h4>{item.body}</h4>
        </div>
    )
}