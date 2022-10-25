import { useContext } from "react";
import { Context } from "../contexts/Context";

export const ContextPractice = () => {

    const { name } = useContext(Context);
    const data = useContext(Context);

    return (
        <>
            <div>Valores do Contexto = Nome: {name}, idade: {data.age} anos</div>
        </>
    );
}