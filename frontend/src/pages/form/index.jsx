import { Link, useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/button';
import  Header  from '../../components/header';
import { Input } from '../../components/input';
import React,  { useState, useEffect } from 'react';
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';
import axios from 'axios';

const Form = () => {
    const [endereco, setEndereco] = useState('');

    const navigate = useNavigate();
    const handleClickFeed = () => {
        navigate('/feed')
    }
    const handleClickLogin= () => {
        navigate('/login')
    }
    
    const buscarEndereco = () => {
       
        let cep = document.getElementById("cep");
        let url = "https:/brasilapi.com.br/api/cep/v2/"+cep.value;
        axios.get(url)
        .then(response => {
            const dadosEndereco = response.data.json();
            setEndereco(dadosEndereco);
        })
        .catch(error => {
            console.error('Erro ao buscar endereço:', error);
        });
    };

    return (<>      
        <Header/>
        <Container>    
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <form>
                        <Input id="nome" placeholder="nome" leftIcon={<MdEmail/>}/>
                        <Input id="cpf" placeholder="cpf" leftIcon={<MdEmail/>}/>
                        <Input id="formacao" placeholder="formacao" leftIcon={<MdEmail/>}/>
                        <Input id="cep" placeholder="cep" leftIcon={<MdEmail/>}/>
                        <Button title="buscar" onClick={buscarEndereco}/>
                        <p>{endereco}</p>
                        <Input id="telefone" placeholder="telefone" leftIcon={<MdEmail/>}/>
                        <Input id="email" placeholder="e-mail" leftIcon={<MdEmail/>}/>
                        <Input id="senha" placeholder="senha" type="password"  leftIcon={<MdLock/>}/>
                        <Input id="confirmedSenha" placeholder="confirme sua senha" type="password"  leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant="secondary" onClick={handleClickFeed} type="button"/>
                    </form>
                </Wrapper>        
        </Container>
    </>);
};


export { Form }