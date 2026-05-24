
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  function ativo({isActive}){
    return  isActive ? "active" : "";
  } 
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink className={ativo} to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={ativo} to="/sobre">
            Sobre nós
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink end className={ativo} to="/produtos">
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="/carrinho" className="nav-item nav-carrinho btn btn-accent">
            Carrinho (0)
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}