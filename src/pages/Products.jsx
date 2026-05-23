import React from 'react';
import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch.jsx';
import Produto from '../components/Produto/Produto.jsx';
import Loader from '../components/Loader/Loader.jsx';


export default function Products() {
 
const [produtos,setProdutos] = useState();
const {get , carregador} = useFetch("https://react-tutorial-demo.firebaseio.com/");
  useEffect(()=>{
    console.log(produtos)
  },[produtos])
  useEffect(()=> { 

      get("supermarket.json")
      .then(data => {
          data && setProdutos(data) 
      })
      .catch(error => console.error(error))
  },[])

  return (<>
      <div className="produtos-layout">
        {carregador ? <Loader/> : (
          <>
            <h1>Produtos</h1>
            <p>Dê uma olhada nos nossos produtos</p>
            <div className="produtos-grid">
            {produtos &&produtos.map((produto) => {
              return (
                <Produto key={produto.id} detalhes={produto}></Produto>
              );
            })}
            </div>
          </>
        )}
</div>
  </>);
}