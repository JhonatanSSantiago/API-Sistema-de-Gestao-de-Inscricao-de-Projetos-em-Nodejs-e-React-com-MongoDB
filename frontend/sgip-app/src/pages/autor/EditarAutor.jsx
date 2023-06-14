import basePathUrl from "../../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditarAutor = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [formacao, setFormacao] = useState("");

  useEffect(() => {
    const fetchAutor = async () => {
      try {
        const response = await basePathUrl.get(`/autor/${id}`);
        const autor = response.data;
        setNome(autor.nome);
        setCpf(autor.cpf);
        setEmail(autor.email);
        setTelefone(autor.telefone);
        setEndereco(autor.endereco);
        setFormacao(autor.formacao);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAutor();
  }, [id]);

  const updateAutor = async (e) => {
    e.preventDefault();
    const autor = { nome, cpf, email, telefone, endereco, formacao };
    await basePathUrl.put(`/autor/${id}`, autor);
    navigate("/listautor");
  };

  return (
    <div className='newPremio'>
      <h2>Editar Autor</h2>
      <form onSubmit={updateAutor}>
        <div className="form-control">
          <label htmlFor="nome">Nome: </label>
          <input type="text" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="cpf">CPF: </label>
          <input type="text" name="cpf" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="formacao">Formação: </label>
          <input type="text" name="formacao" id="formacao" value={formacao} onChange={(e) => setFormacao(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="telefone">Telefone: </label>
          <input type="tel" name="telefone" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="endereco">Endereço: </label>
          <input type="text" name="endereco" id="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
        </div>
        <input className="btn btn-primary" type="submit" value="Atualizar Autor" />
      </form>
    </div>
  );
};

export default EditarAutor;
