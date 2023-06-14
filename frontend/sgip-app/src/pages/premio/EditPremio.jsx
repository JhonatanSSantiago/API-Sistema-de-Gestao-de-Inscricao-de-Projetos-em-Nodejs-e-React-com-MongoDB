import basePathUrl from "../../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPremio = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [ano, setAno] = useState("");
  const [inicio, setInicio] = useState("");
  const [encerramento, setEncerramento] = useState("");
  const [inscricao, setInscricao] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [resultado, setResultado] = useState("");

  useEffect(() => {
    const fetchPremio = async () => {
      try {
        const response = await basePathUrl.get(`/premio/${id}`);
        const premio = response.data;
        setNome(premio.nome);
        setDescricao(premio.descricao);
        setAno(premio.ano);
        setInicio(premio.inicio);
        setEncerramento(premio.encerramento);
        setInscricao(premio.inscricao);
        setAvaliacao(premio.avaliacao);
        setResultado(premio.resultado);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPremio();
  }, [id]);

  const updatePremio = async (e) => {
    e.preventDefault();
    const premio = { nome, descricao, ano, inicio, encerramento, inscricao, avaliacao, resultado };
    await basePathUrl.put(`/premio/${id}`, premio);
    navigate("/listpremio");
  };

  return (
    <div className='newPremio'>
      <h2>Editar Prêmio</h2>
      <form onSubmit={updatePremio}>
        <div className="form-control">
          <label htmlFor="nome">Nome: </label>
          <input type="text" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="descricao">Descrição: </label>
          <textarea type="text" name="descricao" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="ano">Ano: </label>
          <input type="text" name="ano" id="ano" value={ano} onChange={(e) => setAno(e.target.value)} />
        </div>
        <div className="form-control-data">
          <label htmlFor="inicio">Inicio: </label>
          <input type="date" name="inicio" id="inicio" value={inicio} onChange={(e) => setInicio(e.target.value)} />
          <label htmlFor="encerramento">Encerramento: </label>
          <input type="date" name="encerramento" id="encerramento" value={encerramento} onChange={(e) => setEncerramento(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="inscricao">Período de inscrição: </label>
          <input type="text" name="inscricao" id="inscricao" value={inscricao} onChange={(e) => setInscricao(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="avaliacao">Período de avaliação: </label>
          <input type="text" name="avaliacao" id="avaliacao" value={avaliacao} onChange={(e) => setAvaliacao(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="resultado">Dia do resultado: </label>
          <input type="date" name="resultado" id="resultado" value={resultado} onChange={(e) => setResultado(e.target.value)} />
        </div>
        <input className="btn btn-primary" type="submit" value="Atualizar Prêmio" />
      </form>
    </div>
  );
};

export default EditPremio;
