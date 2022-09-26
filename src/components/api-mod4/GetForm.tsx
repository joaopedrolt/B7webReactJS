import { useState } from "react";
import { Posts } from "../../types/Posts";
import { api } from "./Api";

export const GetJsonApi = () => {

    let [posts, setPosts] = useState<Posts[]>([]);
    let [loading, setLoadStatus] = useState(false);

    const Get = async () => {
        try {
            setLoadStatus(true);
            let arrayPosts = await api.getPosts();
            console.log(arrayPosts);
            setPosts(arrayPosts);
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