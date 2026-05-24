import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Botao from '../Botao/Botao.jsx';


const ProdutoDetalhes = () => {
const produto = useOutletContext();
  return (
    <> 
    <p>
        {produto.description} vendido a <strong>R${produto.price.toFixed(2)}</strong> por unidade.
    </p>
    <Botao>R${produto.price.toFixed(2)}</Botao>
    </>
  );
};

export default ProdutoDetalhes;
