import "./App.css";

import { Navigation } from "./components/Navigation";
import { default as JsonData } from "./data/data.json";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { Services } from "./components/Services";
import { ImgCarousel } from "./components/ui/Carousel";
import { Container, Row } from "react-bootstrap";
import WrappingContainer from "./components/ui/WrappingContainer";

function App() {
  const [pageData, setPageData] = useState({}); //pageData== vetor,
  // setPageData == funcão para carregar o vetor
  useEffect(() => {
    //recebe como primeiro parâmetro uma função
    // que será executada assim que o componente renderizar.
    setPageData(JsonData);
  }, []);

  return (
    <>

      <Navigation />
      <ImgCarousel />
      <Home />
    </>
  );
}

/*
      <Features />
      <Services />
      <About />
      <Gallery />
      <Testimonials/>
      <Team />
      <Contact />
*/

export default App;
