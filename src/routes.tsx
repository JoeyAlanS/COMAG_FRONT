import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Gallery } from "./components/Gallery";
import { Services } from "./components/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "features", element: <Features /> },
      { path: "gallery", element: <Gallery /> },
      { path: "services", element: <Services /> },
    ],
  },
]);