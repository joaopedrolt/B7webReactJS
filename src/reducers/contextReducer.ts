import { useReducer } from "react";

type User = {
    name: string;
    age: number;
}

export type ContextInfo = {
    user: User;
}

export type Action = {
    type: string;
    payload: {
        [key: string]: any;
    }
}

export const inicialState: ContextInfo = {
    user: {
        name: 'Joao Pedro',
        age: 20
    }
};

export const userReducer = (state: ContextInfo, action: Action) => {
    let a;
    switch (action.type) {
        case 'CHANGE_NAME':
            a = { ...state, user: { name: action.payload.name, age: state.user.age } };
            break;
        case 'CHANGE_AGE':
            a = { ...state, user: { name: action.payload.name, age: state.user.age } }; 
            break;
    }

    return {
        a,
        dispatch: () => null
    };
}