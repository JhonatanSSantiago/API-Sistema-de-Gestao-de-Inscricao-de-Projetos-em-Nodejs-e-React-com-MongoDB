import basePathUrl from "../../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";




const ListPremio = () => {

  const[premios, setPremios] = useState([]);
   const getPremios = async() => {
      
      try {
        
        const reponse = await basePathUrl.get("/premio");
        const data = reponse.data;
        setPremios(data);

      } catch (error) {
        console.log(error)
      }



   }

   const deletePremio = async (id) => {
    await basePathUrl.delete(`premio/${id}`);

    const filteredPosts = premios.filter((premio) => premio._id !== id);

    setPremios(filteredPosts);
  };

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
                    <div className="table" key={premio._id}>                                        
                        <div>{premio.nome}</div>                                                         
                    </div>
                  ))
                )}
                </td>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( 
                    <div className="table" key={premio._id}>                
                        <div>{premio.descricao}</div>                                                           
                    </div>
                  ))
                )}
                </td>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( 
                    <div className="table" key={premio._id}>                
                        <div>{premio.ano}</div>                                                           
                    </div>
                  ))
                )}
                </td>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( 
                    <div className="table" key={premio._id}>                
                       {premio.inicio}                                                          
                    </div>
                  ))
                )}
                </td>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( 
                    <div className="table" key={premio._id}>                
                        {premio.encerramento}                                                        
                    </div>
                  ))
                )}
                </td>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( 
                    <div className="table" key={premio._id}>                
                        {premio.inscricao}                                                        
                    </div>
                  ))
                )}
                </td>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( 
                    <div className="table" key={premio._id}>                
                        {premio.avaliacao}                                                         
                    </div>
                  ))
                )}
                </td>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( 
                    <div className="table" key={premio._id}>                
                        {premio.resultado}                                                           
                    </div>
                  ))
                )}
                </td>
                <td>
                {premios.length === 0 ? <p>Carregando..</p> :  (
                  premios.map((premio) => ( <>
                    <div className="table" key={premio._id}>                
                       <Link to={`/listpremio/${premio._id}`} className="btn">Ver</Link>                                                                            
                    </div>
                     <div className="table" key={premio._id}>                
                     <Link onClick={()=> deletePremio(premio._id)} className="btn">Excluir</Link>                                                          
                  </div> </>
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