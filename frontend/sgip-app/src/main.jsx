import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewPremio from "./pages/premio/NewPremio";
import ListPremio from "./pages/premio/ListPremio";
import NewAutor from "./pages/autor/NewAutor";
import ListAutor from "./pages/autor/ListAutor";
import NewProjeto from "./pages/projeto/NewProjeto";
import ListProjeto from "./pages/projeto/ListProjeto";
import NewAvaliador from "./pages/avaliador/NewAvaliador";
import ListAvaliador from "./pages/avaliador/ListAvaliador";
import Projeto from "./pages/projeto/Projeto";
import EditarAutor from "./pages/autor/EditarAutor";
import EditAvaliador from "./pages/avaliador/EditAvaliador";
import EditPremio from "./pages/premio/EditPremio";
import EditProjeto from "./pages/projeto/EditProjeto";
import AvaliarProjeto from "./pages/projeto/AvaliarProjeto";
import "./index.css";

//criando rotas
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
      path: "/",
      element: <Home />
      },
      {
        path: "/newpremio",
        element: <NewPremio />
      },
      {
        path: "/listpremio",
        element: <ListPremio />
      },
      {
        path: "/newautor",
        element: <NewAutor />
      },
      {
        path: "/listautor",
        element: <ListAutor />
      },
      {
        path: "/newprojeto",
        element: <NewProjeto />
      },
      {
        path: "/listprojeto",
        element: <ListProjeto />
      },
      {
        path: "/newavaliador",
        element: <NewAvaliador />
      },
      {
        path: "/listavaliador",
        element: <ListAvaliador />
      },
      {
        path: "/projeto/:id",
        element: <Projeto />
      },
      {
        path: "/editautor/:id",
        element: <EditarAutor />
      },
      {
        path: "/editavaliador/:id",
        element: <EditAvaliador/>
      },
      {
        path: "/editpremio/:id",
        element: <EditPremio/>
      },
      {
        path: "/editprojeto/:id",
        element: <EditProjeto/>
      },
      {
        path: "/avaliarprojeto/:id",
        element: <AvaliarProjeto/>
      }
      
  ]
  }
])
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
