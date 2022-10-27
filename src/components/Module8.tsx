import { useContext } from "react";
import { Context } from "../contexts/Context";
import { useCount } from "../reducers/count";
import { usePeopleList } from "../reducers/peopleList";

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

export const ReducerPeopleList = () => {

    const [people, dispatch] = usePeopleList();

    return (
        <>
            <h1>Pessoas</h1>
            <ul>
                {
                    people.map((person) => (
                        <li>
                            <h3>Nome: {person.name}</h3>
                            <p>Id: {person.id}</p>
                        </li>
                    ))
                }
            </ul>
            <button>Add</button>
            <button>Remove</button>
            <button>Ordenar</button>
            <button>Resetar</button>
        </>
    );
}