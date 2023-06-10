import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";




const ListPremio = () => {

  const[premios, setPremios] = useState([]);
   const getPremios = async() => {
      
      try {
        
        const reponse = await axios.get("http://localhost:3000/api/premio");
        const data = reponse.data;

        console.log(data);
        setPremios(data);

      } catch (error) {
        console.log(error)
      }



   }

   useEffect(() => {
      getPremios()
   }, [])

  return (
    <div>
      <h1>Premios</h1>
      <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descricao</th>
                <th>Ano</th>
                <th>Inicio</th>
                <th>Encerramento</th>
                <th>Período de Inscrição</th>
                <th>Período de Avaliação</th>
                <th>Resultado</th>
                <th>Opção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( 
                    <div className="premios" key={premio._id}>                
                        <td>{premio.nome}</td>                                                           
                    </div>
                  ))
                )}
                </td>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( 
                    <div className="premios" key={premio._id}>                
                        <td>{premio.descricao}</td>                                                           
                    </div>
                  ))
                )}
                </td>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( 
                    <div className="premios" key={premio._id}>                
                        <td>{premio.ano}</td>                                                           
                    </div>
                  ))
                )}
                </td>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( 
                    <div className="premios" key={premio._id}>                
                        <td>{premio.inicio}</td>                                                           
                    </div>
                  ))
                )}
                </td>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( 
                    <div className="premios" key={premio._id}>                
                        <td>{premio.encerramento}</td>                                                           
                    </div>
                  ))
                )}
                </td>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( 
                    <div className="premios" key={premio._id}>                
                        <td>{premio.inscricao}</td>                                                           
                    </div>
                  ))
                )}
                </td>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( 
                    <div className="premios" key={premio._id}>                
                        <td>{premio.avaliacao}</td>                                                           
                    </div>
                  ))
                )}
                </td>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( 
                    <div className="premios" key={premio._id}>                
                        <td>{premio.resultado}</td>                                                           
                    </div>
                  ))
                )}
                </td>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( 
                    <div className="premios" key={premio._id}>                
                       <Link to={`/listpremio/${premio._id}`} className="btn">Ver</Link>                                                          
                    </div>
                  ))
                )}
                </td>
              </tr>

             </tbody>  
      </table>  
    </div>
  );
};

export default ListPremio