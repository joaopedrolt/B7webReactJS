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

    let newState = [...state];

    switch (action.type) {
        case 'add':
            if (action.payload?.name) {
                newState.push({
                    id: uuidv4(),
                    name: action.payload.name
                });
            }
            return newState;
        case 'remove':
            if (action.payload?.id) {
                newState.filter(item => item.id !== action.payload?.id);
            }
            return newState;
        case 'sort':
            state.sort((a, b) => (a.name > b.name) ? 1 : -1);
            break;
        case 'reset':
            state = inicialState;
            break;
    }

    return state;
}

export const usePeopleList = () => {
    return useReducer(reducer, inicialState);
}