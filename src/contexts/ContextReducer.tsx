import { createContext, useReducer } from "react";
import { ContextInfo, inicialState, userReducer } from "../reducers/contextReducer";

type StateType = {
    context: ContextInfo;
    dispatch: React.Dispatch<any>;
}

const inicialContextState = {
    context: inicialState,
    dispatch: () => null
}

export const Context = createContext<StateType>(inicialContextState);

type Props = {
    children: React.ReactNode;
}

export const ContextProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(userReducer, inicialContextState);

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );

}