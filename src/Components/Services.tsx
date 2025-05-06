import { Container, Row, Col } from 'react-bootstrap';
import { default as JsonData } from "../data/data.json";

export function Services() {
  return (
    <div id='services' className='text-center'>
      <Container>
        <div className='section-title'>
          <h2>Nossos Serviços</h2>
          <p>
            Fornecimento de Serviçõs da COMAG.
          </p>
        </div>
        <Row>
          {JsonData
            ? JsonData.Services.map((d, i) => (
                <Col md={4} key={`${d.name}-${i}`}>
                  <img
                    src={`/images/${d.image}`}
                    alt={d.name}
                    style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '15px' }}
                  />
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </Col>
              ))
            : 'loading'}
        </Row>
      </Container>
    </div>
  );
}
