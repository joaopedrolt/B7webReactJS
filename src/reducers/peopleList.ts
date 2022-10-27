import { useReducer } from "react";

type Person = {
    id: number;
    name: string;
}

type Action = {
    type: string;
    payload?: {
        name?: string;
        id?: number;
    }
}

type reducerState = Person[];

const inicialState: Person[] = [{ id: 0, name: '' }];

const reducer = (state: reducerState, action: Action) => {

    switch (action.type) {
        case 'add':
            if (action.payload?.name) {
                state.push({
                    id: 1,
                    name: action.payload.name
                });
            }
            break;
        case 'remove':
            if (action.payload?.id) {
                state.filter(item => item.id !== action.payload?.id);
            }
            break;
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