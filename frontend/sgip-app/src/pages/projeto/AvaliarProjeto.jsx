import basePathUrl from "../../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AvaliarProjeto = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dataAtual = new Date();
  const dataFormatada = formatarData(dataAtual)
  const [projetoAnterior, setProjetoAnterior] = useState(null);

  const [avaliadores, setAvaliadores] = useState([]);
  const [autores, setAutores] = useState([]);
  const [premios, setPremios] = useState([]);
  const [area, setArea] = useState("");
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [premio, setPremio] = useState("");
  const [autor, setAutor] = useState("");
  const [statusprojeto = "Avaliado", setStatusProjeto] = useState();
  const [data_envio, setData_Envio] = useState("");
  const [dataAvaliacao = dataFormatada] = useState();
  const [nota, setNota] = useState();
  const [parecer, setParecer] = useState();
  const [avaliador, setAvaliador] = useState();
 

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

        // Salvar o projeto anterior
        setProjetoAnterior(projeto);
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
        parecer,
        nota,
        dataAvaliacao,
        avaliador,
    };
    
    await basePathUrl.put(`/projeto/${id}`, projeto);
    navigate("/listprojeto");
  };

  const getAvaliadores = async() => {
     
    try {
      
      const reponse = await basePathUrl.get("/avaliador");
      const data = reponse.data;
      setAvaliadores(data);

    } catch (error) {
      console.log(error)
    }
  }

  function formatarData(data) {
    var dia = data.getDate();
    var mes = data.getMonth() + 1; // Os meses são indexados a partir de 0, então adicionamos 1.
    var ano = data.getFullYear();
    var hora = data.getHours();
    var minutos = data.getMinutes();

    // Certifica-se de que o dia, mês, hora e minutos tenham sempre dois dígitos
    if (dia < 10) {
      dia = '0' + dia;
    }
    if (mes < 10) {
      mes = '0' + mes;
    }
    if (hora < 10) {
      hora = '0' + hora;
    }
    if (minutos < 10) {
      minutos = '0' + minutos;
    }

    return dia + '/' + mes + '/' + ano + ' ' + hora + ':' + minutos;
  }

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
    getAvaliadores();
  }, []);

  return (
    <div className='newPremio'>
      <h2>Avaliar Projeto</h2>
      <h3>Dados do Projeto:</h3>
      {projetoAnterior && (
        <div className="p-3 mb-2 bg-black text-white form-control col-md-3">

        <div className="row">
          <div className="col-6">
            <p>Área: {projetoAnterior.area}</p>
            <p>Título: {projetoAnterior.titulo}</p>
            <p>Resumo: {projetoAnterior.resumo}</p>
          </div>
          <div className="col-6">
            {premios.length > 0 && (
              <p>
                Prêmio:{" "}
                {premios.find((premio) => premio._id === projetoAnterior.premio)?.nome}
              </p>
            )}
            {autores.length > 0 && (
              <p>
                Autor:{" "}
                {autores.find((autor) => autor._id === projetoAnterior.autor)?.nome}
              </p>
            )}
            <p>Data de Envio: {projetoAnterior.data_envio}</p>
          </div>
        </div>
      </div>
      )}
      <form onSubmit={updateProjeto}>
        <div className="form-control">
          <label htmlFor="nota">Nota: </label>
          <input type="number" name="nota" id="nota" placeholder="Informe a nota" onChange={(e) => setNota(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="parecer">Parecer: </label>
          <textarea type="text" name="parecer" id="parecer" placeholder="Informe seu parecer" onChange={(e) => setParecer(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="avaliador">Avaliador:</label>
          <select name="avaliador" id="avaliador" onChange={(e) => setAvaliador(e.target.value)}>
          <option value=" - "> Selecione um avaliador </option>
            {avaliadores.map((avaliador) => (         
              <option key={avaliador._id} value={avaliador._id}>{avaliador.nome}</option>
            ))}          
          </select>
        </div>     

        <input className="btn btn-primary" type="submit" value="Avaliar Projeto"/>
      </form>
    </div>
  );
};

export default AvaliarProjeto;