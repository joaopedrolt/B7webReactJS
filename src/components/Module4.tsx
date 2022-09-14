import React, { useEffect, useState } from "react";
import { Posts } from "../types/Posts";

export const UseEffectForm = () => {

    let [number, setNumber] = useState(0);
    let [status, setStatus] = useState(false);

    const handleClick = () => {
        setNumber(Math.random);
    };

    useEffect(() => {
        setStatus(true);
    }, [number]);

    return (
        <div>
            <button onClick={handleClick}>Clique para gerar um numero aleatorio</button>
            <div>{number}</div>
            <div>{"UseEffect " + (status == false ? "não detectou mudança" : "detectou mudança")}</div>
        </div>
    );
}

export const GetJsonApi = () => {

    let [posts, setPosts] = useState<Posts[]>([]);
    let [loading, setLoadStatus] = useState(false);

    const Get = async () => {
        try {
            setLoadStatus(true);
            let response = await fetch('https://jsonplaceholder.typicode.com/posts')
            let json = await response.json();
            setPosts(json);
            setLoadStatus(false);
        } catch (error) {
            alert("Nao foi possivel carregar tente mais tarde");
            setLoadStatus(false);
        }
    };

    return (
        <div>
            <button onClick={Get}>Carregar Posts</button>
            {loading &&
                <div>Carregando Posts...</div>
            }

            {!loading &&
                <div className="posts">
                    {posts.map((item, index) => (
                        <div className="post" key={index}>
                            <div>{item.id}</div>
                            <div>{item.title}</div>
                            <div>{item.body}</div>
                        </div>
                    ))}
                </div>}
        </div>
    );
}

export const PostJsonApi = () => {

    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");

    const InputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const InputBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value);
    };

    const Post = async () => {
        if (title && body) {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: "Post",
                body: JSON.stringify({ title, body, userId: 1 }),
                headers: { 'Content-Type': 'application/json' }
            })
            let json = await response.json();
            if (json.id) {
                alert('Adicionado! Verifique o payload')
            } else {
                alert('Nao foi adcionado!')
            }
        } else {
            alert('Preencha todos os campos!')
        }

    };

    return (
        <div>
            <fieldset className="flex flex-col border-2">
                <legend>Post Api</legend>
                <input value={title} type="text" onChange={InputTitle} placeholder='Titulo' />
                <textarea className="mt-4" value={body} onChange={InputBody} placeholder='Body' />
                <button onClick={Post}>Enviar Post</button>
            </fieldset>
        </div>
    );
}