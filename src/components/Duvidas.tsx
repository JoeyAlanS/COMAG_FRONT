import { Col, Container, Row } from "react-bootstrap";
import {default as JsonData} from "../data/data.json";
import Accordion from "react-bootstrap/Accordion";
import { Team } from "./Team";
import { Testemunhos } from "./Testemunhos";
import Downloads from "./Downloads";

export function Duvidas() {
  return (
    <>

    <Container>
      <Row className="justify-content-md-center py-5">
      <Col xs lg="10">
        <Col md={{span:8, offset:2}} className=' section-title'>
        <Container className="d-flex justify-content-center align-items-center">
          <h2 className="text-primary mb-4">
             Perguntas Frequentes (FAQ) 
          </h2>
        </Container>
        </Col>
        <Accordion>
        {JsonData && JsonData.Duvidas.length > 0 ? (
          JsonData.Duvidas.map((duvida, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>
              <span className="fw-bold">{duvida.title}</span>
            </Accordion.Header>
            <Accordion.Body>{duvida.conteudo}</Accordion.Body>
          </Accordion.Item>
          ))
        ) : (
          <Accordion.Item eventKey="0">
          <Accordion.Header>Loading</Accordion.Header>
          <Accordion.Body>Loading</Accordion.Body>
          </Accordion.Item>
        )}
        </Accordion>
      </Col>
      </Row>
    </Container>
    <Testemunhos/>
    <Downloads/>

    </>
  );
}
