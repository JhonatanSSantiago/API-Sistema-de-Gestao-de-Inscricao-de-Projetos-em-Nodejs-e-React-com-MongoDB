import './NewPremio.css';
import basePathUrl from "../../axios/config";
import { useState  } from 'react';
import { useNavigate } from "react-router-dom";

const NewPremio = () => {

    const navigate = useNavigate()
    const [nome, setNome] = useState()
    const [descricao, setDescricao] = useState()
    const [ano, setAno] = useState()
    const [inicio, setInicio] = useState()
    const [encerramento, setEncerramento] = useState()
    const [inscricao, setInscricao] = useState()
    const [avaliacao, setAvaliacao] = useState()
    const [resultado, setResultado] = useState()

    const createPremio = async (e) => {
      e.preventDefault()
      const premio = { nome, descricao, ano, inicio, encerramento, inscricao, avaliacao, resultado }
      console.log(premio)
      await basePathUrl.post("/premio/", premio,);
      navigate("/listpremio")
    }


  return (
    <div className='newPremio'>
      <h2>Cadastrar Prêmio</h2>
      <form onSubmit={(e) => createPremio(e)}>
        <div className="form-control">
          <label htmlFor="nome">Nome: </label>
          <input type="text" name="nome" id="nome" placeholder="Digite um nome" onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="descricao">Descrição: </label>
          <textarea type="text" name="descricao" id="descricao" placeholder="Digite uma descricao" onChange={(e) => setDescricao(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="ano">Ano: </label>
          <input type="text" name="ano" id="ano" placeholder="Digite um ano" onChange={(e) => setAno(e.target.value)}/>
        </div>
        <div className="form-control-data">
          <label htmlFor="inicio">Inicio: </label>
          <input type="date" name="inicio" id="inicio" onChange={(e) => setInicio(e.target.value)}/>
          <label htmlFor="encerramento">Encerramento: </label>
          <input type="date" name="encerramento" id="encerramento" onChange={(e) => setEncerramento(e.target.value)} />      
        </div>
        <div className="form-control">
          <label htmlFor="inscricao">Período de inscrição: </label>
          <input type="text" name="inscricao" id="inscricao" placeholder="Digite um período" onChange={(e) => setInscricao(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="avaliacao">Período de avaliação: </label>
          <input type="text" name="avaliacao" id="avaliacao" placeholder="Digite um período" onChange={(e) => setAvaliacao(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="resultado">Dia do resultado: </label>
          <input type="date" name="resultado" id="resultado" onChange={(e) => setResultado(e.target.value)}/>
        </div>          
        <input className='form-control' type="submit" value="Cadastrar Prêmio"/>
       </form>
    </div>
  )
}

export default NewPremio;