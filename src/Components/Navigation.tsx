
import { Navbar, Nav, Container } from 'react-bootstrap';

import JsonData from "../data/data.json";
import { useState, useEffect } from "react";



export function Navigation() {
  const [pageData, setPageData] = useState({});//pageData== vetor, setPageData == funcão para carregar o vetor
  useEffect(() => {
    setPageData(JsonData);
  }, []);

  return (
    <div>
      <div>
        <>
          <Navbar collapseOnSelect fixed='top' expand='sm' className='navbar-default '>
            <Container>
              <Navbar.Brand >
              <img
              src="../img/logos/comag.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Comag Logo"
            />
              <img
              src="../img/logos/logo-schulz.png"
              width="60"
              height="20"
              className="d-inline-block align-center "
              alt="Schulz Logo"
            />
              </Navbar.Brand>
              <Navbar.Toggle className='navbar-toggle' aria-controls='responsive-navbar-nav' />

              <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end" >
                <Nav defaultActiveKey="/" as="ul">
                  <Nav.Item>
                    <Nav.Link href="#home" className="nav-links" >Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#features" className="nav-links" >Serviços</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#services" className="nav-links" >Produtos</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='#about' className="nav-links" >Contatos</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='#portfolio' className="nav-links" >Dúvidas</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>


            </Container>
          </Navbar>

        </>
      </div>


    </div>


  )
}