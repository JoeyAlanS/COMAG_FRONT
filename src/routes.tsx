import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./components/Home";
import { Sobre } from "./components/Sobre";
import { Contatos } from "./components/Contatos";
import { Features } from "./components/Apresentacao";
import { Duvidas } from "./components/Duvidas";
import { Servicos } from "./components/Servicos";
import { Produtos } from "./components/Produtos";
import { ErrorPage } from "./components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "sobre", element: <Sobre /> },
      { path: "contatos", element: <Contatos />,},
      { path: "features", element: <Features /> },
      { path: "duvidas", element: <Duvidas /> },
      { path: "servicos", element: <Servicos /> },
      { path: "produtos", element: <Produtos /> },
    ],
  },
]);