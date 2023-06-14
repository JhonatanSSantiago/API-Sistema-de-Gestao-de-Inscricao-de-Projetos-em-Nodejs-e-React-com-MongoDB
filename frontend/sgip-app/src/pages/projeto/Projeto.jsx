import basePathUrl from "../../axios/config";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Projeto = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [projeto, setProjeto] = useState(null);
  const [autor, setAutor] = useState(null);
  const [premio, setPremio] = useState(null);
  const [avaliador, setAvaliador] = useState(null);

  const getProjeto = async () => {
    try {
      const response = await basePathUrl.get(`/projeto/${id}`);
      const projetoData = response.data;
      setProjeto(projetoData);
      getAutor(projetoData.autor);
      getPremio(projetoData.premio);
      getAvaliador(projetoData.avaliador);
    } catch (error) {
      console.log(error);
    }
  };

  const getAutor = async (autorId) => {
    try {
      const response = await basePathUrl.get(`/autor/${autorId}`);
      const autorData = response.data;
      setAutor(autorData);
    } catch (error) {
      console.log(error);
    }
  };

  const getPremio = async (premioId) => {
    try {
      const response = await basePathUrl.get(`/premio/${premioId}`);
      const premioData = response.data;
      setPremio(premioData);
    } catch (error) {
      console.log(error);
    }
  };
  const getAvaliador = async (avaliadorId) => {
    try {
      const response = await basePathUrl.get(`/avaliador/${avaliadorId}`);
      const avaliadorData = response.data;
      setAvaliador(avaliadorData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProjeto = async (id) => {
    await basePathUrl.delete(`projeto/${id}`);
    navigate("/listprojeto")
  };

  useEffect(() => {
    getProjeto();
  }, [id]);

  return (
    <div>
      <h1>Projeto</h1>
      {projeto ? (
        <table className="table">
          <thead>
            <tr>
              <th>Área</th>
              <th>Título</th>
              <th>Descrição</th>
              <th>Prêmio</th>
              <th>Autor</th>
              <th>Status</th>
              <th>Data de Envio</th>
              <th>Avaliação</th>
              <th>Nota</th>
              <th>Avaliador</th>
              <th>Data da Avaliação</th>
              <th>Opção</th>
            </tr>
          </thead>
          <tbody>
            <tr key={projeto._id}>
              <td>{projeto.area}</td>
              <td>{projeto.titulo}</td>
              <td>{projeto.resumo}</td>
              <td>{premio ? premio.nome : "Carregando..."}</td>
              <td>{autor ? autor.nome : "Carregando..."}</td>
              <td>{projeto.status}</td>
              <td>{projeto.data_envio}</td>
              <td>{projeto.parecer}</td>
              <td>{projeto.nota}</td>
              <td>{avaliador ? avaliador.nome : "Carregando..."}</td>
              <td>{projeto.dataAvaliacao}</td>
              <td>
                <div className="btn-group">
                <Link to={`/editprojeto/${projeto._id}`} className="btn btn-info">
                    Editar
                  </Link>
                  <Link to={`/avaliarprojeto/${projeto._id}`} className="btn btn-info">
                    Avaliar
                  </Link>
                  <Link onClick={() => deleteProjeto(projeto._id)} className="btn btn-danger">
                    Excluir
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Projeto;