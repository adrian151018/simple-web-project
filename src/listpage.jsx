import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

export function ListPage() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => setItems(json));
    }, []);
    const navigate = useNavigate();
    

    return (
        <ul>
            {
                items.map(item => (
                    <li onClick={() => 
                        navigate(`/listitems/${item.id}`)
                    }>{item.title}</li>
                ))
            }
        </ul>
    )
}