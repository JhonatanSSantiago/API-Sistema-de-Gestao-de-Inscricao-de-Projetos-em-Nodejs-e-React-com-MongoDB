# Sistema de Gestao de Inscricao de Projetos

## Breve Descrição do Sistema
Deve-se desenvolver uma aplicação web para controle informatizado da gestão de Inscrição de Projetos.

## Cadastros básicos (CRUD completo)
* Cadastro do prêmio (nome, descrição, cronograma (data início, data fim), ano)
* Cadastro do autor (Dados Pessoais)
* Cadastro do avaliador (Dados Pessoais e do avaliador)
* Cadastros Auxiliares (somente no código e no banco de Dados)

## Controles
* Enviar Projeto (Área, título, resumo, autores, data do envio)
* Avaliar projeto (Projeto, avaliador, parecer, nota, data avaliação)

## Consultas/Listagens
* Listar projetos e autores (Geral).
* Listar autores e projetos (Geral).
* Listar projetos enviado não avaliado (visualizar dados dos projetos, inclusive autores).
* Listar Projetos avaliados (visualizar dados projetos e dados da avaliação).
* Listar Projetos vencedores por ordem de notas maiores (visualizar dados projetos).


## Diagrama 

![diagrama](./diagrama.jpg)


Para executar:

npm install
npm start
npm run dev