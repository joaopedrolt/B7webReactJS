import { useState } from "react";
import { api } from "./Api";

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
            let json = await api.addNewPosts(title, body, 1);
            console.log(json);
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