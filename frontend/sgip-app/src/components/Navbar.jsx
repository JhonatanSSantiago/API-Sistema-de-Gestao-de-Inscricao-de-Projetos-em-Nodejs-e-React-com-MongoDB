import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={'/'}>Blog</Link>
        </h2>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/newpremio'} className="new-btn">Cadastrar Premio</Link></li>
            <li><Link to={'/listpremio'} className="new-btn">Listar Premios</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;