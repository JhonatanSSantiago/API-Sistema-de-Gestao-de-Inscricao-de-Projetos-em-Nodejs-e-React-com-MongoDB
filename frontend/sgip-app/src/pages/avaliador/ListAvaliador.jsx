import basePathUrl from "../../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListAvaliador = () => {
  const[avaliadores, setAvaliadores] = useState([]);
  const getAvaliadores = async() => {
     
     try {
       
       const reponse = await basePathUrl.get("/avaliador");
       const data = reponse.data;
       setAvaliadores(data);

     } catch (error) {
       console.log(error)
     }
  }

  const deleteAvaliador = async (id) => {
   await basePathUrl.delete(`avaliador/${id}`);

   const filteredPosts = avaliadores.filter((avaliador) => avaliador._id !== id);

   setAvaliadores(filteredPosts);
 };

  useEffect(() => {
     getAvaliadores()
  }, [])


  return (
    <div>
    <h1>Avaliadores</h1>
    <table>
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
            <tr>
              <td>
              {avaliadores.length === 0 ? <p>Carregando..</p> :  (
                avaliadores.map((avaliador) => ( 
                  <div className="table" key={avaliador._id}>                                        
                      <div>{avaliador.nome}</div>                                                         
                  </div>
                ))
              )}
              </td>
              <td>
              {avaliadores.length === 0 ? <p>Carregando..</p> :  (
                avaliadores.map((avaliador) => ( 
                  <div className="table" key={avaliador._id}>                
                      <div>{avaliador.cpf}</div>                                                           
                  </div>
                ))
              )}
              </td>
              <td>
              {avaliadores.length === 0 ? <p>Carregando..</p> :  (
                avaliadores.map((avaliador) => ( 
                  <div className="table" key={avaliador._id}>                
                      <div>{avaliador.email}</div>                                                           
                  </div>
                ))
              )}
              </td>
              <td>
              {avaliadores.length === 0 ? <p>Carregando..</p> :  (
                avaliadores.map((avaliador) => ( 
                  <div className="table" key={avaliador._id}>                
                     {avaliador.telefone}                                                          
                  </div>
                ))
              )}
              </td>
              <td>
              {avaliadores.length === 0 ? <p>Carregando..</p> :  (
                avaliadores.map((avaliador) => ( 
                  <div className="table" key={avaliador._id}>                
                      {avaliador.endereco}                                                        
                  </div>
                ))
              )}
              </td>
              <td>
              {avaliadores.length === 0 ? <p>Carregando..</p> :  (
                avaliadores.map((avaliador) => ( 
                  <div className="table" key={avaliador._id}>                
                      {avaliador.formacao}                                                        
                  </div>
                ))
              )}
              </td>
              <td>
              {avaliadores.length === 0 ? <p>Carregando..</p> :  (
                avaliadores.map((avaliador) => ( 
                <>
                  <div className="table" key={avaliador._id}>                
                     <Link to={`/listavaliador/${avaliador._id}`} className="btn">Ver</Link>                                                                            
                  </div>
                   <div className="table" key={avaliador._id}>                
                   <Link onClick={()=> deleteAvaliador(avaliador._id)} className="btn">Excluir</Link>                                                          
                  </div> 
                </>
                ))
              )}
              </td>
            </tr>

           </tbody>  
    </table>  
  </div>
  )
}

export default ListAvaliador