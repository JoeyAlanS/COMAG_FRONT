import "./App.css";
import { Navigation } from "./components/Navigation";
import { default as JsonData } from "./data/data.json";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImgCarousel } from "./components/ui/Carousel";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  const [pageData, setPageData] = useState({});
  useEffect(() => {
    setPageData(JsonData);
  }, []);

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;