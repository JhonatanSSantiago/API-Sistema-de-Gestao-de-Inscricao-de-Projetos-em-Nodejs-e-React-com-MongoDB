import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-dark text-light">
        <div className="container-fluid">     
          <Link className="navbar-brand" to={'/'}>SGIP</Link>
            <ul className="nav nav-underline">
              <li className="nav-item">
                <Link className="nav-link text-primary" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to={'/newpremio'}>Cadastrar Premio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to={'/listpremio'} >Listar Premios</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link text-primary" to={'/newprojeto'}>Cadastrar Projeto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to={'/listprojeto'}>Listar Projetos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to={'/newautor'}>Cadastrar Autor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to={'/listautor'}>Listar Autores</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to={'/newavaliador'}>Cadastrar Avaliador</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to={'/listavaliador'} >Listar Avaliadores</Link>
              </li>
            </ul>
        </div>
      </nav>
  )
}

export default Navbar;