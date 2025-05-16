import { Navbar, Nav, Container } from "react-bootstrap";

import JsonData from "../data/data.json";
import { useState, useEffect } from "react";

export function Navigation() {
  const [pageData, setPageData] = useState({}); //pageData== vetor, setPageData == funcão para carregar o vetor
  useEffect(() => {
    setPageData(JsonData);
  }, []);

  /*Navbar fixed on top of the screen 
              style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              zIndex: 1030, 
            }}
  */
  return (
    <div>
      <div>
        <>
          <Navbar
            collapseOnSelect
            fixed="top"
            expand="sm"
            className="navbar-default"
            style={{}}
          >
            <Container>
              <Navbar.Brand>
                <div className="d-flex align-items-center">
                  <img
                    src="../img/logos/comag.png"
                    width="80"
                    height="80"
                    className="me-3"
                    alt="Comag Logo"
                  />
                  <img
                    src="../img/logos/logo-schulz.png"
                    width="100"
                    height="35"
                    alt="Schulz Logo"
                  />
                </div>
              </Navbar.Brand>
              <Navbar.Toggle
                className="navbar-toggle"
                aria-controls="responsive-navbar-nav"
              />

              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-end"
              >
                <Nav defaultActiveKey="/" as="ul">
                  <Nav.Item>
                    <Nav.Link href="#home" className="nav-links">
                      Home
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#features" className="nav-links">
                      Serviços
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#services" className="nav-links">
                      Produtos
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#about" className="nav-links">
                      Contatos
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#portfolio" className="nav-links">
                      Dúvidas
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      </div>
    </div>
  );
}
