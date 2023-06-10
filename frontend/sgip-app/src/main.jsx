import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewPremio from "./pages/NewPremio";
import ListPremio from "./pages/ListPremio";

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
      }
  ]
  }
])
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
