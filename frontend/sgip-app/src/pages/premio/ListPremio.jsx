import basePathUrl from "../../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListPremio = () => {
  const [premios, setPremios] = useState([]);

  const getPremios = async () => {
    try {
      const response = await basePathUrl.get("/premio");
      const data = response.data;
      setPremios(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePremio = async (id) => {
    await basePathUrl.delete(`/premio/${id}`);
    const filteredPremios = premios.filter((premio) => premio._id !== id);
    setPremios(filteredPremios);
  };

  useEffect(() => {
    getPremios();
  }, []);

  return (
    <div>
      <h1>Prêmios</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Ano</th>
            <th>Início</th>
            <th>Encerramento</th>
            <th>Período de Inscrição</th>
            <th>Período de Avaliação</th>
            <th>Resultado</th>
            <th>Opção</th>
          </tr>
        </thead>
        <tbody>
          {premios.length === 0 ? (
            <tr>
              <td colSpan="9">Nenhum Premio Cadastrado</td>
            </tr>
          ) : (
            premios.map((premio) => (
              <tr key={premio._id}>
                <td>{premio.nome}</td>
                <td>{premio.descricao}</td>
                <td>{premio.ano}</td>
                <td>{premio.inicio}</td>
                <td>{premio.encerramento}</td>
                <td>{premio.inscricao}</td>
                <td>{premio.avaliacao}</td>
                <td>{premio.resultado}</td>
                <td>
                  <div className="btn-group">
                    <Link to={`/editpremio/${premio._id}`} class="btn btn-info">
                      Editar
                    </Link>
                    <Link onClick={() => deletePremio(premio._id)} className="btn btn-danger">
                      Excluir
                    </Link>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListPremio;
