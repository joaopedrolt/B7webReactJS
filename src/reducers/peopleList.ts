import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

type Person = {
    id: string;
    name: string;
}

type Action = {
    type: string;
    payload?: {
        name?: string;
        id?: string;
    }
}

type reducerState = Person[];

const inicialState: Person[] = [];

const reducer = (state: reducerState, action: Action) => {

    let stateCopy = [...state];

    switch (action.type) {
        case 'add':
            if (action.payload?.name) {
                stateCopy.push({
                    id: uuidv4(),
                    name: action.payload.name
                });
            }
            return stateCopy;
        case 'remove':
            if (action.payload?.id) {
                let newState = stateCopy.filter(item => item.id !== action.payload?.id);
                return newState;
            }
        case 'sort':
            let sortState = stateCopy.sort((a, b) => (a.name > b.name) ? 1 : -1);
            return sortState;
        case 'reset':
            stateCopy = inicialState;
            console.log(stateCopy);
            return stateCopy;
    }

    return state;
}

export const usePeopleList = () => {
    return useReducer(reducer, inicialState);
}