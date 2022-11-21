import { useEffect, useState } from "react";
import { GetJsonApi } from "./api-mod4/GetForm";
import { PostJsonApi } from "./api-mod4/PostForm";

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

export const ApiJson = () => {
    return (
        <div>
            <GetJsonApi />
            <PostJsonApi />
        </div>
    );
}