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

const userInicialState: User = {
    name: 'Joao Pedro',
    age: 20
};

const reducer = (state: User, action: Action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { ...state, name: action.payload.name };
        case 'CHANGE_AGE':
            return { ...state, age: action.payload.age };
    }

    return state;
}

const contextReducer = () => {
    return useReducer(reducer, userInicialState)
}
