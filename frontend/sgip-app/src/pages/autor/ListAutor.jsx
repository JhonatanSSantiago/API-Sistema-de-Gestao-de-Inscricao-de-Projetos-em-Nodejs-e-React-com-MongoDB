import basePathUrl from "../../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListAutor = () => {
  const [autores, setAutores] = useState([]);

  const getAutores = async () => {
    try {
      const response = await basePathUrl.get("/autor");
      const data = response.data;
      setAutores(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAutor = async (id) => {
    await basePathUrl.delete(`/autor/${id}`);
    const filteredAutores = autores.filter((autor) => autor._id !== id);
    setAutores(filteredAutores);
  };

  useEffect(() => {
    getAutores();
  }, []);

  return (
    <div>
      <h1>Autores</h1>
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
          {autores.length === 0 ? (
            <tr>
              <td colSpan="7">Carregando...</td>
            </tr>
          ) : (
            autores.map((autor) => (
              <tr key={autor._id}>
                <td>{autor.nome}</td>
                <td>{autor.cpf}</td>
                <td>{autor.email}</td>
                <td>{autor.telefone}</td>
                <td>{autor.endereco}</td>
                <td>{autor.formacao}</td>
                <td>
                  <div className="btn-group">
                    <Link to={`/editautor/${autor._id}`} class="btn btn-info">
                      Editar
                    </Link>
                    <Link onClick={() => deleteAutor(autor._id)} className="btn btn-danger">
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

export default ListAutor;
