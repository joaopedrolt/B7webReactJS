import React, { Fragment , ReactNode} from "react";

type Props = {
    props1?: string,
    props2?: string
    children?: ReactNode
}

export const ChildrenComponent = ({children}: Props) => {
    return (
        <>
            <div>Esse component usa Children</div>
            {children}
        </>
    );
}

export const ImportInfo = ({props1 , props2}: Props) => {
    return (
        <div>Testando Props: {props1}, e {props2}</div>
    );
}

export const FragmentComponent = () => {
    return (
        <>
            <div>Div 1 em um fragmento</div>           
            <div>Div 2 no mesmo fragmento</div>
        </>
    );

    return (
        <Fragment>
            <div>Div 1 em um fragmento, usando a tag Fragment</div>           
            <div>Div 2 no mesmo fragmento</div>
        </Fragment>
    );
}

export const Nojsx = () => {
    return (
        React.createElement("a", { href: "https://www.google.com" }, "Hello World!")
    );
}

export const ClassProps = () => {
    return (
        <div className="hello">
            Hello Word!
        </div>
    );
}

export const Expressions = () => {

    let name: string = "Joao Pedro";
    let lastname: string = "Lima";
    let n1: number = 1;
    let n2: number = 3;
    let link: string = "https://www.google.com"

    function somar(number1: number, number2: number) {
        return number1 + number2;
    }

    return (
        <div>
            <div>Meu nome é {name}</div>
            <div>Meu nome completo é {`${name} ${lastname}`}</div>
            <div>Minha nota é {n1 + n2}</div>
            <div>Essa nota foi calculada por função. Nota = {somar(1, 2)}</div>
            <a href={link}>Link do Google</a>
        </div>
    );
}
