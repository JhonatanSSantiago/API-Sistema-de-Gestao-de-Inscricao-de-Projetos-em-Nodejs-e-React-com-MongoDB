import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewPremio from "./pages/premio/NewPremio";
import ListPremio from "./pages/premio/ListPremio";
import NewAutor from "./pages/autor/NewAutor";
import ListAutor from "./pages/autor/ListAutor";

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
        element: <ListPremio />
      },
      {
        path: "/listprojeto",
        element: <ListPremio />
      },
      
  ]
  }
])
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
