import basePathUrl from "../../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProjeto = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [autores, setAutores] = useState([]);
  const [premios, setPremios] = useState([]);
  const [area, setArea] = useState("");
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [premio, setPremio] = useState("");
  const [autor, setAutor] = useState("");
  const [statusprojeto, setStatusProjeto] = useState("Não Avaliado");
  const [data_envio, setData_Envio] = useState("");

  useEffect(() => {
    const fetchProjeto = async () => {
      try {
        const response = await basePathUrl.get(`/projeto/${id}`);
        const projeto = response.data;
        setArea(projeto.area);
        setTitulo(projeto.titulo);
        setResumo(projeto.resumo);
        setPremio(projeto.premio);
        setAutor(projeto.autor);
        setStatusProjeto(projeto.statusprojeto);
        setData_Envio(projeto.data_envio);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjeto();
  }, [id]);

  const updateProjeto = async (e) => {
    e.preventDefault();
    const projeto = {
      area,
      titulo,
      resumo,
      premio,
      autor,
      statusprojeto,
      data_envio,
    };
    await basePathUrl.put(`/projeto/${id}`, projeto);
    navigate("/listprojeto");
  };

  const getAutores = async () => {
    try {
      const response = await basePathUrl.get("/autor");
      const data = response.data;
      setAutores(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPremios = async () => {
    try {
      const response = await basePathUrl.get("/premio");
      const data = response.data;
      setPremios(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAutores();
    getPremios();
  }, []);

  return (
    <div>
      <h2>Editar Projeto</h2>
      <form onSubmit={updateProjeto}>
        <div className="form-control">
          <label htmlFor="area">Área: </label>
          <input
            type="text"
            name="area"
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="titulo">Título: </label>
          <input
            type="text"
            name="titulo"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="resumo">Descrição: </label>
          <textarea
            type="text"
            name="resumo"
            id="resumo"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="premio">Prêmio:</label>
          <select
            name="premio"
            id="premio"
            value={premio}
            onChange={(e) => setPremio(e.target.value)}
          >
            <option value="-">Selecione um prêmio</option>
            {premios.map((premio) => (
              <option key={premio._id} value={premio._id}>
                {premio.nome}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="autor">Autor:</label>
          <select
            name="autor"
            id="autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          >
            <option value="-">Selecione um autor</option>
            {autores.map((autor) => (
              <option key={autor._id} value={autor._id}>
                {autor.nome}
              </option>
            ))}
          </select>
        </div>
        <input className="btn btn-primary" type="submit" value="Atualizar Projeto" />
      </form>
    </div>
  );
};

export default EditProjeto;
