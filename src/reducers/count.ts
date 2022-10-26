import { useReducer } from "react";

type State = {
    count: number
}

type Action = {
    type: string
}

const inicialState: State = { count: 0 };

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'add':
            let add = state.count + 1
            return { count: add };
        case 'reset':
            return inicialState;
        default:
            return state;
    }
}

export const useCount = () => {
    return useReducer(reducer, inicialState);
}