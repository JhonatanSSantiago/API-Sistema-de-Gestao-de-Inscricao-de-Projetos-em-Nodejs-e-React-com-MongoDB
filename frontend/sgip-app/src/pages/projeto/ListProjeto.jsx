import basePathUrl from "../../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListProjeto = () => {
  const [projetos, setProjetos] = useState([]);

  const getProjetos = async () => {
    try {
      const response = await basePathUrl.get("/projeto");
      const data = response.data;
      setProjetos(data);
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
            <th>Opção</th>
          </tr>
        </thead>
        <tbody>
          {projetos.length === 0 ? (
            <tr>
              <td colSpan="8">Carregando...</td>
            </tr>
          ) : (
            projetos.map((projeto) => (
              <tr key={projeto._id}>
                <td>{projeto.area}</td>
                <td>{projeto.titulo}</td>
                <td>{projeto.resumo}</td>
                <td>{premios[projeto._id] ? premios[projeto._id].nome : "Carregando..."}</td>
                <td>{autores[projeto._id] ? autores[projeto._id].nome : "Carregando..."}</td>
                <td>{projeto.status}</td>
                <td>{projeto.data_envio}</td>
                <td>
                  <div className="btn-group">
                    <Link to={`/projeto/${projeto._id}`}  class="btn btn-info">
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

export default ListProjeto;
