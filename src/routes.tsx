import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./components/Home";
import { Sobre } from "./components/Sobre";
import { Contatos } from "./components/Contatos";
import { Features } from "./components/Features";
import { Duvidas } from "./components/Duvidas";
import { Services } from "./components/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "sobre", element: <Sobre /> },
      { path: "contatos", element: <Contatos /> },
      { path: "features", element: <Features /> },
      { path: "duvidas", element: <Duvidas /> },
      { path: "services", element: <Services /> },
    ],
  },
]);