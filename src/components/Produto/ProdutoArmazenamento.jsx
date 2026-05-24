import React from 'react';
import { useOutletContext } from 'react-router-dom';

const ProdutoArmazenamento = () => {
const produto = useOutletContext();
  return (
    <> 
        <p>
            <strong>Instruções de Armazenamento:</strong> {produto.storage}
        </p>
    </>
  );
};

export default ProdutoArmazenamento;