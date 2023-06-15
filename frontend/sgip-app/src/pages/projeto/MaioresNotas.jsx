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
    try {
      const response = await basePathUrl.delete(`projeto/${id}`);
      const responseData = response.data;
      alert("Excluido")
      const filteredProjetos = projetos.filter((projeto) => projeto._id !== id);  
      setProjetos(filteredProjetos);
      
    } catch (error) {
      console.error(error);
    }
    
  };

  useEffect(() => {
    getProjetos();
  }, []);

  const [autores, setAutores] = useState({});

  useEffect(() => {
    const fetchAutores = async () => {
      for (const projeto of projetos) {
        try {
          if (projeto.autor) {
            const response = await basePathUrl.get(`/autor/${projeto.autor}`);
            const autor = response.data;
            setAutores((prevAutores) => ({
              ...prevAutores,
              [projeto._id]: autor,
            }));
          } else {
            setAutores((prevAutores) => ({
              ...prevAutores,
              [projeto._id]: { nome: "Autor Desconhecido" },
            }));
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
  
    fetchAutores();
  }, [projetos]);

  const [premios, setPremios] = useState({});

  useEffect(() => {
    const fetchPremios = async () => {
      for (const projeto of projetos) {
        try {
          if (projeto.premio) {
            const response = await basePathUrl.get(`/premio/${projeto.premio}`);
            const premio = response.data;
            setPremios((prevPremios) => ({
              ...prevPremios,
              [projeto._id]: premio,
            }));
          } else {
            setPremios((prevPremios) => ({
              ...prevPremios,
              [projeto._id]: { nome: "Sem Prêmio" },
            }));
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
  
    fetchPremios();
  }, [projetos]);
  const [avaliadores, setAvaliadores] = useState({});

  useEffect(() => {
    const fetchAvaliadores = async () => {
      for (const projeto of projetos) {
        try {
          if (projeto.avaliador) {
            const response = await basePathUrl.get(`/avaliador/${projeto.avaliador}`);
            const avaliador = response.data;
            setAvaliadores((prevAvaliadores) => ({
              ...prevAvaliadores,
              [projeto._id]: avaliador,
            }));
          } else {
            setAvaliadores((prevAvaliadores) => ({
              ...prevAvaliadores,
              [projeto._id]: { nome: "Sem Avaliador" },
            }));
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchAvaliadores();
  }, [projetos]);

  // Ordenar projetos por notas maiores
  const sortedProjetos = [...projetos].sort((a, b) => b.nota - a.nota);

  return (
    <div>
      <h1>Projetos com Maiores Notas</h1>
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
              <td colSpan="12">Nenhum Projeto Enviado</td>
            </tr>
          ) : (
            sortedProjetos.map((projeto) => (
              <tr key={projeto._id}>
                <td>{projeto.area}</td>
                <td>{projeto.titulo}</td>
                <td>{projeto.resumo}</td>
                <td>{premios[projeto._id] ? premios[projeto._id].nome : "Premio Desconhecido"}</td>
                <td>{autores[projeto._id] ? autores[projeto._id].nome : "Autor Desconhecido"}</td>
                <td>{projeto.status}</td>
                <td>{projeto.data_envio}</td>
                <td>{projeto.nota}</td>
                <td>{projeto.parecer}</td>
                <td>{avaliadores[projeto._id] ? avaliadores[projeto._id].nome : "Avaliador Desconhecido"}</td>
                <td>{projeto.dataAvaliacao}</td>
                <td>
                  <div className="btn-group">                    
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
