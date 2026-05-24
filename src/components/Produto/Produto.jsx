import React from "react";
import './Produto.css'
import Botao from '../Botao/Botao.jsx';
import { NavLink } from "react-router-dom";


export default function Produto({detalhes}) {
    return (
    <div className="produto">
      <div className="produto-image-container">
        <NavLink to={`/produto/${detalhes.id}/detalhes`}>
          <img src={detalhes.image} width="100" height="100" className="produto-image" alt={detalhes.name} />
        </NavLink>
        <div className="produto-quantity-container">
        <div className="produto-quantity">0</div>
        </div>
      </div>
      <div className="produto-info">
        <h3>{detalhes.name}</h3>
        <p>{detalhes.description}</p>
      </div>
      <div className="produto-checkout">
        <div>
            <Botao contorno className="produto-delete">x</Botao>
        </div>
        <Botao contorno>
          R${detalhes.price}
        </Botao>
      </div>
    </div>
  );
}