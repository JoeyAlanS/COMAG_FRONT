import { Col, Container, Row } from "react-bootstrap";
import {default as JsonData} from "../data/data.json";
import Accordion from "react-bootstrap/Accordion";

export function Duvidas() {
  return (
    <Container>
      <Row className="justify-content-md-center">
      <Col xs lg="10">
        <Accordion>
        {JsonData && JsonData.Duvidas.length > 0 ? (
          JsonData.Duvidas.map((duvida, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{duvida.title}</Accordion.Header>
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
  );
}
