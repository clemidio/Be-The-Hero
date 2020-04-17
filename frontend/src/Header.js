
import React, {useState} from 'react';

export default function Header({title,children}) {
  const [ask, setAsk] = useState("sim")

  function change(){
    if (ask === "sim"){
      setAsk("não")
    }
    else{
      setAsk("sim")
    }
    console.log(ask)
  }
  function Tela(){
    if(title === "almoço"){
      return (
        <div>
        <Header>Resposta: {ask} </Header>
        <button onClick = {change}>Responde</button>
        </div>
      )
    }
    return(
      <h1>Bom dia</h1>
    )

  }
  return (
  <header>
    <h1>{title}</h1>
    <h1>{children}</h1>
    <Tela />
  </header>
  );
}

