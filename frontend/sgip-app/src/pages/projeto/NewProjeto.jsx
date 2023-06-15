import basePathUrl from "../../axios/config";
import { useState, useEffect  } from 'react';
import { useNavigate } from "react-router-dom";

const NewProjeto = () => {

    const navigate = useNavigate()
    const dataAtual = new Date();
    const dataFormatada = formatarData(dataAtual);
    const[autores, setAutores] = useState([]);
    const[premios, setPremios] = useState([]);
    const [area, setArea] = useState()
    const [titulo, setTitulo] = useState()
    const [resumo, setResumo] = useState()
    const [premio, setPremio] = useState()
    const [autor, setAutor] = useState()
    const [statusprojeto = "Não Avaliado", setStatusProjeto] = useState()
    const [data_envio  = dataFormatada, setData_Envio] = useState()

    const createProjeto = async (e) => {
      e.preventDefault()

      const projeto = { area, titulo, resumo, premio, autor, statusprojeto, data_envio }
    
      await basePathUrl.post("/projeto/", projeto,);
      navigate("/listprojeto")
    }

    const getAutores = async() => {
     
      try {
        
        const reponse = await basePathUrl.get("/autor");
        const data = reponse.data;
        setAutores(data);
 
      } catch (error) {
        console.log(error)
      }
    }

    const getPremios = async() => {
     
      try {
        
        const reponse = await basePathUrl.get("/premio");
        const data = reponse.data;
        setPremios(data);
 
      } catch (error) {
        console.log(error)
      }
    }

   useEffect(() => {
      getAutores()
      getPremios() 
    }, [])  


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

    

  return (
    <div className='newPremio'>
      <h2>Cadastrar Projeto</h2>
     
      <form onSubmit={(e) => createProjeto(e)}>
        <div className="form-control">
          <label htmlFor="area">Área: </label>
          <input type="text" name="area" id="area" placeholder="informe a área" onChange={(e) => setArea(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="titulo">Título: </label>
          <input type="text" name="titulo" id="titulo" placeholder="Informe o titulo" onChange={(e) => setTitulo(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="resumo">Descrição: </label>
          <textarea type="text" name="resumo" id="resumo" placeholder="Digite uma descricao" onChange={(e) => setResumo(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="premio">Premio:</label>
          <select name="premio" id="premio" onChange={(e) => setPremio(e.target.value)}>
          <option value=" - "> Selecione um premio </option>
            {premios.map((premio) => (         
              <option key={premio._id} value={premio._id}>{premio.nome}</option>
            ))}          
          </select>
        </div>      
        <div className="form-control">
          <label htmlFor="autor">Autor:</label>
          <select name="autor" id="autor" onChange={(e) => setAutor(e.target.value)}>
          <option value=" - "> Selecione um autor </option>
            {autores.map((autor) => (         
              <option key={autor._id} value={autor._id}>{autor.nome}</option>
            ))}          
          </select>
        </div>     
        <input className="btn btn-primary" type="submit" value="Enviar Projeto"/>
       </form>
    </div>
  )
}

export default NewProjeto