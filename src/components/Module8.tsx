import { useContext } from "react";
import { Context } from "../contexts/Context";
import { useCount } from "../reducers/count";

export const ContextPractice = () => {

    const { name } = useContext(Context);
    const data = useContext(Context);

    return (
        <>
            <div>Valores do Contexto = Nome: {name}, idade: {data.age} anos</div>
        </>
    );
}

export const ReducerPractice = () => {

    const [state, dispatch] = useCount();

    return (
        <>
            <div>Reducer State = {state.count}</div>
            <button onClick={() => { dispatch({ type: 'add' }) }}>Add</button>
            <button onClick={() => { dispatch({ type: 'reset' }) }}>Reset</button>
        </>
    );
}