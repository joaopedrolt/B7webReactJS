import { ChangeEvent, useContext, useState } from "react";
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
    const [inputName, setInputName] = useState('');
    const [inputID, setInputID] = useState('');


    const addPerson = () => {
        dispatch({
            type: 'add',
            payload: {
                name: inputName
            }
        })
    }

    const deletePerson = () => {
        dispatch({
            type: 'remove',
            payload: {
                id: inputID
            }
        })
    }

    return (
        <fieldset className="flex flex-col border-2">
            <legend>Pessoas</legend>
            <ul>
                {
                    people.map((person) => {

                        return (
                            <li>
                                <h3>Nome: {person.name} -- ID: {person.id}</h3>
                            </li>
                        )
                    })
                }
            </ul>
            <br />
            <br />
            <input type="text" value={inputName} onChange={(e: ChangeEvent<HTMLInputElement>) => { setInputName(e.target.value) }} placeholder="Adicionar Nome"></input>
            <br />
            <button onClick={addPerson}>Add</button>
            <br />
            <br />x 
            <input type="text" value={inputID} onChange={(e: ChangeEvent<HTMLInputElement>) => { setInputID(e.target.value) }} placeholder="ID"></input>
            <br />
            <button onClick={deletePerson}>Remove</button>
            <br />
            <br />
            <button>Ordenar</button>
            <br />
            <button>Resetar</button>
        </fieldset>
    );
}