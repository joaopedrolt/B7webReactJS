import { useState } from "react";
import '../assets/css/module3.css';
import Module3 from '../assets/css/module3.module.css';
import styled from "styled-components";

type Props = {
    bgColor: string;
}


export const DivStyledC = styled.h1`
    background-color: blue;
    color: white;
    padding: 20px;
`;

export const CssInline = () => {

    let [color, setColor] = useState({ background: 'white', color: 'black' });
    const padding = 20;

    const switchColor = () => {
        if (color.color == 'black') {
            setColor({ background: 'black', color: 'white' });
        } else {
            setColor({ background: 'white', color: 'black' });
        }
        console.log(JSON.stringify(color));
    }

    return (
        <div>
            <button onClick={switchColor}>Mudar cor da Div</button>
            <div style={{ backgroundColor: color.background, color: color.color, padding}}>TESTE DE CSS</div>
            <div className="titulo">ISSO É UM TITULO STYLESHEET</div>
            <div className={Module3.titulo}>ISSO É UM TITULO CSS MODULE</div>
        </div>
    );
}
 