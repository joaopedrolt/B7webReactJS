import { createContext } from "react";

type ContextType = {
    name: string;
    age: number;
}

const inicialState = {
    name: 'Joao',
    age: 20
}

export const Context = createContext<ContextType>(inicialState);

type Props = {
    children: React.ReactNode
}

export const ContextProvider: React.FC<Props> = ({children}: Props) => {
    return (
        <Context.Provider value={inicialState}>{children}</Context.Provider>
    );
}