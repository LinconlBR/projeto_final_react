import React from 'react';
import Botao from '../components/Botao/Botao';
import Input from '../components/Input/Input';


export default function Home() {
  function handleCliqueBotao() {  
    alert("Botão clicado!");
  }
  function handleInputSobrenome() {
        console.log("Sobrenome mudou");
    }
  return (
    <div className="home">
      <h1>Welcome to Home</h1>
      <p>This is the home page of your React application.</p>
      
      <h2>Buttons</h2>
      <div style={{display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
        <Botao>Normal</Botao>
        <Botao contorno >Outline</Botao>
        <Botao className="extra-class" onClick={handleCliqueBotao}>Customizable</Botao>
    </div>

    <h2>Inputs</h2>
    <div style={{display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
        <Input placeholder="Nome" />
        <Input placeholder="Sobrenome" onInput={handleInputSobrenome} />
        <Input placeholder="Email" type="email" required />
    </div>
    </div>
  );
}
