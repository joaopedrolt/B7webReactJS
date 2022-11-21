import { ChangeEvent, useContext, useState } from "react";
import { useCount } from "../reducers/count";
import { usePeopleList } from "../reducers/peopleList";

export const ContextPractice = () => {


    return (
        <>
            
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

    const addPerson = () => {
        dispatch({
            type: 'add',
            payload: { name: inputName }
        })
    }

    const deletePerson = (id: string) => {
        dispatch({
            type: 'remove',
            payload: { id: id }
        })
    }

    const sortPeople = () => {
        dispatch({
            type: 'sort'
        })
    }

    const resetPeople = () => {
        dispatch({
            type: 'reset'
        })
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value)
    }

    return (
        <fieldset className="flex flex-col border-2">
            <legend>Pessoas</legend>
            <ul>
                {
                    people.map((person, key) => {

                        return (
                            <li key={key}>
                                <div className="flex">
                                    <h3 >Nome: {person.name}</h3>
                                    <span className="ml-2" onClick={() => { deletePerson(person.id) }}>- Remover</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <br />
            <br />
            <input type="text" value={inputName} onChange={handleInputChange} placeholder="Adicionar Nome"></input>
            <br />
            <button onClick={addPerson}>Add</button>
            <br />
            <br />
            <button onClick={sortPeople}>Ordenar</button>
            <br />
            <button onClick={resetPeople}>Resetar</button>
        </fieldset>
    );
}