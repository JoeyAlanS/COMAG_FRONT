import { Col, Container, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function Downloads() {
  return (
    <>
      <Container className="my-5 container-sm w-40">
        <Row className="justify-content-md-center py-2">
          <Col xs lg="10">
            <Col md={{ span: 8, offset: 2 }} className="section-title">
              <Container className="d-flex justify-content-center align-items-center">
                <h2 className="text-primary mb-2">Manuais Para Consulta</h2>
              </Container>
            </Col>
          </Col>
        </Row>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <a href="https://www.schulz.com.br/wp-content/uploads/2024/02/025.1173-0-Manual-Motocompressor-de-Pistao-Schulz-Pratiko-rev-0-fev-24.pdf">
              CSI Pratiko 6,6 Manual
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://www.schulz.com.br/wp-content/uploads/2022/06/Manual-Compressor-Pistao-Schulz-Pro-025.0949-0-rev.10-abr-22-025.0940-0-rev.15-jul-19-Trilingue.pdf">
              CSV 10 Pro Manual
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://www.schulz.com.br/wp-content/uploads/2021/02/Catalogo-Compressor-Audaz-dez24-MI.pdf">
              Audaz MCSV 20 Catálogo
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://www.schulz.com.br/wp-content/uploads/2020/07/Manual-Compressor-de-Pistao-Schulz-Bravo-025.0942-2-rev.00-Dez-19-025.0940-0-rev.15-jul-19-Trilingue-Trilingue.pdf">
              CSL 10.1BR/100; CSL 15.1/100; CSL 15.1BR/200; CSL 20.1/200 Manual
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://www.schulz.com.br/wp-content/uploads/2025/05/Super-Catalogo-Geral-Schulz-MI-mai25.pdf">
              Max MSV 20 Catálogo
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://www.schulz.com.br/wp-content/uploads/2025/05/Super-Catalogo-Geral-Schulz-MI-mai25.pdf">
              Bravo CSL 20 Catálogo
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://cdn.awsli.com.br/382/382499/arquivos/w900%20mswv%2060%20fort.pdf">
              Fort MSWV 60 Manual
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://www.somar.com.br/wp-content/uploads/2025/04/Catalogo-Geral-Somar-MI-abr25.pdf">
              SOMAR LUS Lavadora Catálogo
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
}

export default Downloads;
