import React from 'react';
import Botao from '../components/Botao/Botao';

export default function Home() {
  function handleCliqueBotao() {  
    alert("Botão clicado!");
  }
  
  return (
    <div className="home">
      <h1>Welcome to Home</h1>
      <p>This is the home page of your React application.</p>

      <div style={{display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
        <Botao>Normal</Botao>
        <Botao contorno >Outline</Botao>
        <Botao className="extra-class" onClick={handleCliqueBotao}>Customizable</Botao>
    </div>
    </div>
  );
}
