import React, { useState } from "react";

type Props = {
    fprops: (txt: string) => void;
}

type Data = {
    listPerson: {name: string, age: number}[];
}

export const FunctionProps = ({ fprops } : Props) => {

    function handleClick(){
        fprops(" (e eu sou o Txt recebido)");
    }

    return (
        <div>
            <button onClick={handleClick}>Função App</button>
        </div>
    );

}

export const EventComponent = () => {

    const handleButtonClick= ()=> {
        alert("Botão foi Clicado");
    }
     
    return (
        <div>
            <button onClick={handleButtonClick}>Alert</button>
        </div>
    );

    return (
        <div>
            <button onClick={()=> {alert("Botão foi Clicado")}}>Alert</button>
        </div>
    );
}

export const Counter = () => {

    let [n, setN] = useState(0);
 
    const handleMore= ()=> {
        setN(n + 1);
    };

    const handleMinus= ()=> {
        setN(n - 1)
    };
     
    return (
        <div>
            <button onClick={handleMore}>+</button>
            <div>{n}</div>
            <button onClick={handleMinus}>-</button>
        </div>
    );
}

export const InputState = () => {

    let [name, setName] = useState("");

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={changeInput} />
            <div>{name}</div>
        </div>
    );
}

export const ExInputState = () => {

    let [name, setName] =  useState("");
    let [lasName, setLastName] = useState("");
    let [age, setAge] = useState(0);

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case "nome":
                setName(event.target.value);
                break;
            case "sobrenome":
                setLastName(event.target.value);
                break;
            case "idade":
                setAge(parseInt(event.target.value));
             break;
        }
    }

    return (
       <div>
            <input type="text" name="nome" value={name} onChange={changeInput}/>
            <input type="text" name="sobrenome" value={lasName} onChange={changeInput}/>
            <input type="number" name="idade" value={age} onChange={changeInput}/>
            <div>Meu nome é {`${name} ${lasName}`} e eu tenho {age}</div>
       </div> 
    );

}

export const ListComponent = ({listPerson}: Data) => {

    let list = ["Joao Pedro", "Marquini", "Paulo Sergio"];
    let objectList = 
    [{ nome: "Calos Oliveira", idade: 12},
     { nome: "Ricado Oliveira", idade: 22},
     { nome: "Lucas Oliveira", idade: 33},
     { nome: "Vasco Oliveira", idade: 44},
     { nome: "Gabriel Oliveira", idade: 55},
    ]

    return (
       <div>
            <h2>Lista de Presença</h2>
            <ul>
                {list.map((item, key)=>
                     <li key={key}>{item}</li>
                )}
            </ul>
            <ul>
                {objectList.map((item, key)=>
                    <li key={key}>{item.nome} - {item.idade}</li>
                )}
            </ul>
            <ul>
                {listPerson.map((item, key)=>
                    <li key={key}>{item.name} - {item.age}</li>
                )}
            </ul>
       </div> 
    );

}

