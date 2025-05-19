// src/components/Navigation.tsx
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import JsonData from "../data/data.json";
import { useState, useEffect } from "react";

export function Navigation() {
  const [pageData, setPageData] = useState({});
  useEffect(() => {
    setPageData(JsonData);
  }, []);

  return (
    <div>
      <div>
        <Navbar
          collapseOnSelect
          fixed="top"
          expand="sm"
          className="navbar-default"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
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
                  <Nav.Link as={Link} to="/" className="nav-links">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/produtos" className="nav-links">
                    Produtos
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/servicos" className="nav-links">
                    Serviços
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/sobre" className="nav-links">
                    Sobre
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/contatos" className="nav-links">
                    Contatos
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/duvidas" className="nav-links">
                    Dúvidas
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}