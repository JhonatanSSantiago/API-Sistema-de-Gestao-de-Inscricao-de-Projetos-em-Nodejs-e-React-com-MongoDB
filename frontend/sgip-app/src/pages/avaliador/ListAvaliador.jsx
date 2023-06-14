import basePathUrl from "../../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListAvaliador = () => {
  const [avaliadores, setAvaliadores] = useState([]);

  const getAvaliadores = async () => {
    try {
      const response = await basePathUrl.get("/avaliador");
      const data = response.data;
      setAvaliadores(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAvaliador = async (id) => {
    await basePathUrl.delete(`/avaliador/${id}`);

    const filteredAvaliadores = avaliadores.filter(
      (avaliador) => avaliador._id !== id
    );

    setAvaliadores(filteredAvaliadores);
  };

  useEffect(() => {
    getAvaliadores();
  }, []);

  return (
    <div className="container">
      <h1>Avaliadores</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Formação</th>
            <th>Opção</th>
          </tr>
        </thead>
        <tbody>
          {avaliadores.length === 0 ? (
            <tr>
              <td colSpan="7">Carregando...</td>
            </tr>
          ) : (
            avaliadores.map((avaliador) => (
              <tr key={avaliador._id}>
                <td>{avaliador.nome}</td>
                <td>{avaliador.cpf}</td>
                <td>{avaliador.email}</td>
                <td>{avaliador.telefone}</td>
                <td>{avaliador.endereco}</td>
                <td>{avaliador.formacao}</td>
                <td>
                  <div className="btn-group">
                    <Link to={`/editavaliador/${avaliador._id}`} class="btn btn-info">
                      Editar
                    </Link>
                    <button onClick={() => deleteAvaliador(avaliador._id)} className="btn btn-danger">
                      Excluir
                    </button>
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

export default ListAvaliador;

