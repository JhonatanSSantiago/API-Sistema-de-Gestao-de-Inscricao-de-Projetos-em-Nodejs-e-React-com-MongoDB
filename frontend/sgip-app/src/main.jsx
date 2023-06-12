import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

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
      
  ]
  }
])
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
