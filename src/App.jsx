import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import  Home from './pages/Home.jsx'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import Cart from './pages/Cart.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import ProdutoDetalhes from './components/Produto/ProdutoDetalhes.jsx';
import ProdutoNutricao from './components/Produto/ProdutoNutricao.jsx';
import ProdutoArmazenamento from './components/Produto/ProdutoArmazenamento.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <NavBar />
          <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<About/>}/>
            <Route path="/produtos" element={<Products/>}/>
            <Route path="/produto/:id/" element={<ProductDetails />}>
              <Route path="detalhes" element={<ProdutoDetalhes />} /> 
              <Route path="nutricao" element={<ProdutoNutricao />} />
              <Route path="armazenamento" element={<ProdutoArmazenamento />} />
            </Route>
            <Route path="/carrinho" element={<Cart/>}/>
          </Routes>
          </div>
        </BrowserRouter>
    </>
  )
}

export default App
