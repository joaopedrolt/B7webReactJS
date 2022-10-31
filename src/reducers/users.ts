import { useReducer } from "react";

type User = {
    name: string;
    age: number;
}

type Action = {
    type: string;
    payload: {
        [key: string]: any;
    }
}

type ReducerState = User[];

const inicialState: User[] = [];

const reducer = (state: ReducerState, action: Action) => {
    return state;
}

const useUsers = () => {
    return useReducer(reducer, inicialState)
}
