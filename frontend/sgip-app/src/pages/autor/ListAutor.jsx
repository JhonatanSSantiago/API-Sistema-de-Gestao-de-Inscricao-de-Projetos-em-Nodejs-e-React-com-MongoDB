import basePathUrl from "../../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const ListAutor = () => {

  const[autores, setAutores] = useState([]);
  const getAutores = async() => {
     
     try {
       
       const reponse = await basePathUrl.get("/autor");
       const data = reponse.data;
       setAutores(data);

     } catch (error) {
       console.log(error)
     }
  }

  const deleteAutor = async (id) => {
   await basePathUrl.delete(`/autor/${id}`);

   const filteredPosts = autores.filter((autor) => autor._id !== id);

   setAutores(filteredPosts);
 };

  useEffect(() => {
     getAutores() 
  }, [])   

  return (
    <div>
    <h1>Autores</h1>
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
              {autores.length === 0 ? <p>Carregando..</p> :  (
                autores.map((autor) => ( 
                  <div className="table" key={autor._id}>                                        
                      <div>{autor.nome}</div>                                                         
                  </div>
                ))
              )}
              </td>
              <td>
              {autores.length === 0 ? <p>Carregando..</p> :  (
                autores.map((autor) => ( 
                  <div className="table" key={autor._id}>                
                      <div>{autor.cpf}</div>                                                           
                  </div>
                ))
              )}
              </td>
              <td>
              {autores.length === 0 ? <p>Carregando..</p> :  (
                autores.map((autor) => ( 
                  <div className="table" key={autor._id}>                
                      <div>{autor.email}</div>                                                           
                  </div>
                ))
              )}
              </td>
              <td>
              {autores.length === 0 ? <p>Carregando..</p> :  (
                autores.map((autor) => ( 
                  <div className="table" key={autor._id}>                
                     {autor.telefone}                                                          
                  </div>
                ))
              )}
              </td>
              <td>
              {autores.length === 0 ? <p>Carregando..</p> :  (
                autores.map((autor) => ( 
                  <div className="table" key={autor._id}>                
                      {autor.endereco}                                                        
                  </div>
                ))
              )}
              </td>
              <td>
              {autores.length === 0 ? <p>Carregando..</p> :  (
                autores.map((autor) => ( 
                  <div className="table" key={autor._id}>                
                      {autor.formacao}                                                        
                  </div>
                ))
              )}
              </td>
              <td>
              {autores.length === 0 ? <p>Carregando..</p> :  (
                autores.map((autor) => ( 
                <>
                  <div className="table" key={autor._id}>                
                     <Link to={`/listautor/${autor._id}`} className="btn">Ver</Link>                                                                            
                  </div>
                   <div className="table" key={autor._id}>                
                   <Link onClick={()=> deleteAutor(autor._id)} className="btn">Excluir</Link>                                                          
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

export default ListAutor