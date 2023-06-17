import { Link } from "react-router-dom";

const Home = () => {
  return (<>    

      <h1>Seja Bem Vindo ao SGIP</h1>

      <h2>Sistema de Gerenciamento de Inscrições de Projetos</h2>
      
  
      <div className="p-3 mb-2 bg-black text-white form-control col-md-3">

        <div className="row">
          <div className="col-2">
            <Link className="nav-link text-primary" to={'/newpremio'}>Cadastrar Premio</Link>
            <Link className="nav-link text-primary" to={'/listpremio'} >Listar Premios</Link>
          </div>
          <div className="col-2">
            <Link className="nav-link text-primary" to={'/newprojeto'}>Cadastrar Projeto</Link>
            <Link className="nav-link text-primary" to={'/listprojeto'}>Listar Projetos</Link>
          </div>
          <div className="col-2">
                <Link className="nav-link text-primary" to={'/newautor'}>Cadastrar Autor</Link>
                <Link className="nav-link text-primary" to={'/listautor'}>Listar Autores</Link>             
          </div>
          <div className="col-2">
                <Link className="nav-link text-primary" to={'/newavaliador'}>Cadastrar Avaliador</Link>
                <Link className="nav-link text-primary" to={'/listavaliador'} >Listar Avaliadores</Link>
          </div>
          <div className="col-2">
                <Link className="nav-link text-primary" to={'/projetosavaliados'}>Projetos Avaliados</Link>
                <Link className="nav-link text-primary" to={'/projetosnaoavaliados'} >Projetos Não Avaliados</Link>
          </div>
          <div className="col-2">
                <Link className="nav-link text-primary" to={'/notas'}>Projetos Com Maiores Notas</Link>
          </div>
          
        </div>
    </div>
  </>
    
  )
}

export default Home