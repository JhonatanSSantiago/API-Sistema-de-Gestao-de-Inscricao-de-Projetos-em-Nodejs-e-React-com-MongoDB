import basePathUrl from "../../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MaioresNotas = () => {
  const [projetos, setProjetos] = useState([]);

  const getProjetos = async () => {
    try {
      const response = await basePathUrl.get("/projeto");
      const data = response.data;
      const projetosComNota = data.filter((projeto) => projeto.hasOwnProperty("nota") && projeto.nota !== null && projeto.nota !== "");
    setProjetos(projetosComNota);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProjeto = async (id) => {
    await basePathUrl.delete(`projeto/${id}`);
    const filteredProjetos = projetos.filter((projeto) => projeto._id !== id);
    setProjetos(filteredProjetos);
  };

  useEffect(() => {
    getProjetos();
  }, []);

  const [autores, setAutores] = useState({});

  useEffect(() => {
    const fetchAutores = async () => {
      for (const projeto of projetos) {
        const response = await basePathUrl.get(`/autor/${projeto.autor}`);
        const autor = response.data;
        setAutores((prevAutores) => ({
          ...prevAutores,
          [projeto._id]: autor,
        }));
      }
    };

    fetchAutores();
  }, [projetos]);

  const [premios, setPremios] = useState({});

  useEffect(() => {
    const fetchPremios = async () => {
      for (const projeto of projetos) {
        const response = await basePathUrl.get(`/premio/${projeto.premio}`);
        const premio = response.data;
        setPremios((prevAutores) => ({
          ...prevAutores,
          [projeto._id]: premio,
        }));
      }
    };

    fetchPremios();
  }, [projetos]);

  const [avaliadores, setAvaliadores] = useState({});

  useEffect(() => {
    const fetchAvaliadores = async () => {
      for (const projeto of projetos) {
        const response = await basePathUrl.get(`/avaliador/${projeto.avaliador}`);
        const avaliador = response.data;
        setAvaliadores((prevAutores) => ({
          ...prevAutores,
          [projeto._id]: avaliador,
        }));
      }
    };

    fetchAvaliadores();
  }, [projetos]);

  // Ordenar projetos por notas maiores
  const sortedProjetos = [...projetos].sort((a, b) => b.nota - a.nota);

  return (
    <div>
      <h1>Projetos</h1>
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
            <th>Nota</th>
            <th>Avaliação</th>
            <th>Avaliador</th>
            <th>Data da Avaliação</th>
            <th>Opção</th>
          </tr>
        </thead>
        <tbody>
          {sortedProjetos.length === 0 ? (
            <tr>
              <td colSpan="8">Carregando...</td>
            </tr>
          ) : (
            sortedProjetos.map((projeto) => (
              <tr key={projeto._id}>
                <td>{projeto.area}</td>
                <td>{projeto.titulo}</td>
                <td>{projeto.resumo}</td>
                <td>{premios[projeto._id] ? premios[projeto._id].nome : "Carregando..."}</td>
                <td>{autores[projeto._id] ? autores[projeto._id].nome : "Carregando..."}</td>
                <td>{projeto.status}</td>
                <td>{projeto.data_envio}</td>
                <td>{projeto.nota}</td>
                <td>{projeto.parecer}</td>
                <td>{avaliadores[projeto._id] ? avaliadores[projeto._id].nome : "Carregando..."}</td>
                <td>{projeto.dataAvaliacao}</td>
                <td>
                  <div className="btn-group">
                    <Link to={`/projeto/${projeto._id}`} className="btn btn-info">
                      Ver
                    </Link>
                    <Link onClick={() => deleteProjeto(projeto._id)} className="btn btn-danger">
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

export default MaioresNotas;
