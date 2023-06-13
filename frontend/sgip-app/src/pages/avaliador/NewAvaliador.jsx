import basePathUrl from "../../axios/config";
import { useState  } from 'react';
import { useNavigate } from "react-router-dom";

const NewAvaliador = () => {

  const navigate = useNavigate()
  const [nome, setNome] = useState()
  const [cpf, setCpf] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [confirmedSenha, setConfirmedSenha] = useState()
  const [telefone, setTelefone] = useState()
  const [endereco, setEndereco] = useState()
  const [formacao, setFormacao] = useState()


  const createAvaliador = async (e) => {
    e.preventDefault()
    const avaliador = { nome, cpf, email, senha, confirmedSenha, telefone, endereco, formacao }
    await basePathUrl.post("/avaliador/", avaliador,);
    navigate("/listavaliador")
  
  
  };

  return (
    <div>
        <form onSubmit={(e) => createAvaliador(e)}>
              <div className="form-control">
                <label htmlFor="nome">Nome: </label>
                <input type="text" name="nome" id="nome" placeholder="Informe seu nome" onChange={(e) => setNome(e.target.value)} />
              </div>
            <div className="form-control">
              <label htmlFor="cpf">CPF: </label>
              <input type="text" name="cpf" id="cpf" placeholder="000.000.000-00" onChange={(e) => setCpf(e.target.value)}/>
            </div>
            <div className="form-control">
              <label htmlFor="formacao">Formação: </label>
              <input type="text" name="formacao" id="formacao" placeholder="Digite sua formação" onChange={(e) => setFormacao(e.target.value)}/>
            </div>
            <div className="form-control">
              <label htmlFor="telefone">Telefone: </label>
              <input type="tel" name="telefone" id="telefone" placeholder="(00) 00000-0000" onChange={(e) => setTelefone(e.target.value)}/>     
            </div>
            <div className="form-control">
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" id="email" placeholder="exemplo@email.com" onChange={(e) => setEmail(e.target.value)} /> 
            </div>
            <div className="form-control">
              <label htmlFor="senha">Senha: </label>
              <input type="password" name="senha" id="senha" placeholder="Digite uma senha" onChange={(e) => setSenha(e.target.value)}/>
            </div>
            <div className="form-control">
              <label htmlFor="confirmedSenha">Confirmar Senha: </label>
              <input type="password" name="confirmedSenha" id="confirmedSenha" placeholder="Confirme a senha" onChange={(e) => setConfirmedSenha(e.target.value)}/>
            </div>
            <div className="form-control">
              <label htmlFor="endereco">Endereço: </label>
              <input  type="text" name="endereco" id="endereco" placeholder="Informe seu endereço "onChange={(e) => setEndereco(e.target.value)}/>
            </div>          
            <input className='form-control' type="submit" value="Cadastrar Avaliador"/>
                 
        </form>

    </div>
  )
}

export default NewAvaliador