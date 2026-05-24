import React from 'react';
import { useParams,NavLink, Outlet  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch.jsx';
import Loader from '../components/Loader/Loader.jsx';


function ProductDetails() {
const {id} = useParams();
const [produto,setProduto] = useState();
const {get,carregador} = useFetch("https://react-tutorial-demo.firebaseio.com/");

useEffect(()=>{
  console.log(produto)
},[produto])

useEffect(()=>{
  get("productinfo/id"+id+".json")
  .then(data => {
      setProduto(data)
  })
  .catch(error => console.error(error))
},[])


  return (
  <>
  {carregador && <Loader />}
  { produto && 
  <div className="produto-detalhes-layout">
  <div>
    <h2>{produto.name}</h2>
    <img src={produto.image} width="125" height="125" className="produto-detalhes-image" alt={produto.name}
    />
  </div>
  <div>
    <div className="tabs">
      <ul>
        <li>
          <NavLink to="detalhes" className={({isActive}) => isActive ? "tab-active" : ""} >Detalhes</NavLink>
        </li>
        <li>
          <NavLink to="nutricao" className={ ({isActive}) => (isActive ? "tab-active" : "")} >Nutrição</NavLink>
        </li>
        <li>
          <NavLink to="armazenamento" className={ ({isActive}) => (isActive ? "tab-active" : "")} >Armazenamento</NavLink>
        </li>
      </ul>
    </div>
    <Outlet context={produto} />
  </div>
</div>}
</>)
}

export default ProductDetails;
