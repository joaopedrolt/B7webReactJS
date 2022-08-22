import React from "react";
import { Expressions, Nojsx, ImportInfo, ClassProps, FragmentComponent, ChildrenComponent} from "./components/Module1";
import { EventComponent, Counter, InputState, ExInputState, FunctionProps, ListComponent, ConditionalRender } from "./components/Module2";
import * as Module3 from "./components/Module3";

const ComponentSameFile = () => {
  return <div>Componente criado no mesmo arquivo App</div>
}

const App = () => {

  const functionProps = (txt: string) => {
    alert("Sou uma função props" + txt);
  }

  return (
    <div>
      <ChildrenComponent>
        <div>Div Criada como Children</div>
      </ChildrenComponent>
      <FunctionProps fprops={functionProps}/>
      <Module3.CssInline />
      <Module3.DivStyledC>Componente criado usando Styled Components</Module3.DivStyledC>
      <ListComponent listPerson={[{name: "Joao Carlos", age: 12}, 
                                  {name: "Joao Lucas", age: 13}, 
                                  {name: "Joao Henrique", age: 14}, 
                                  {name: "Joao Lima", age: 15}]} />
    </div>
  );
}

export default App;