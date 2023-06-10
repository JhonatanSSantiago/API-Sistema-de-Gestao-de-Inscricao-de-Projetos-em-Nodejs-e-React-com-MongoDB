import * as React from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import  Header  from '../../components/header';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form'


function createData(nome, descricao, ano, inicio, encerramento, inscricao, avaliacao, resultado) {
    return { nome, descricao, ano, inicio, encerramento, inscricao, avaliacao, resultado };
}
  
  const rows = [
    createData(),
  ];
  
  
  
function Premio() {
   
    const navigate = useNavigate();
    
    const { register, handleSubmit } = useForm();

    function CriarPremio(e){ 
      e.preventDefault(); 
      console.log("test");
    }
    return (  

        <div>
            <Header/>
        <Box component="form" sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                }} noValidateautoComplete="off">

      <form onSubmit={CriarPremio}>
        <TextField required label="Nome" type="search" id="nome" {...register("nome")}/>
        <TextField required label="Descrição" type="search" id="descricao" {...register("descricao")}/>
        <TextField required label="Ano" type="search" id="ano" {...register("ano")}/>
        <TextField required label="Inicio" type="search" id="inicio"
        {...register("inicio")}/>
        <TextField required label="Encerramento" type="search" id="encerramento" {...register("encerramento")}/>
        <TextField required label="Inscrição" type="search" id="inscricao" {...register("inscricao")}/>
        <TextField required label="Avaliação" type="search" id="avaliacao" {...register("avaliacao")}/>
        <TextField required label="Resultado" type="search" id="resultado" {...register("resultado")}/>
        <Button variant="contained" type="submit">Criar Prêmio</Button>
      </form>
     

    </Box>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Descrição</TableCell>
            <TableCell align="right">Ano</TableCell>
            <TableCell align="right">Inicio</TableCell>
            <TableCell align="right">Encerramento</TableCell>
            <TableCell align="right">Inscrição</TableCell>
            <TableCell align="right">Avaliação</TableCell>
            <TableCell align="right">Resultado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>     

    );
};


export default Premio ;