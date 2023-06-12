import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={'/'}>SGIP</Link>
        </h2>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/newpremio'}>Cadastrar Premio</Link></li>
            <li><Link to={'/listpremio'} >Listar Premios</Link></li>
            <li><Link to={'/newautor'}>Cadastrar Autor</Link></li>
            <li><Link to={'/listautor'} >Listar Autores</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;