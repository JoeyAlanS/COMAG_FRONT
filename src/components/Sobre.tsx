import { Container, Row, Col, Ratio, Image } from 'react-bootstrap';
import { default as JsonData } from "../data/data.json";
import { Team } from './Team';

export function Sobre() {
  return (
    <>
    <Team/>
    <div id="sobre" className="py-5 bg-light">
      <Container>
        <Row className="align-items-start">
          {/* Texto + Imagens */}
          <Col xs={12} md={6}>
            <h2 className="text-primary mb-4">Sobre Nós</h2>
            <p>{JsonData?.Sobre?.paragraph || "loading..."}</p>

            {/* Imagens abaixo do texto */}
            <Row className="mt-4 g-2">
              {JsonData?.Sobre?.images?.map((img, index) => (
                <Col xs={6} key={index} className="d-flex justify-content-center align-items-center">
                  <div style={{ height: '80px', width: '100%', maxWidth: '150px' }}>
                    <Image
                      src={img.smallImage}
                      alt={img.title}
                      style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'contain'
                      }}
                      rounded
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Mapa */}
          <Col xs={12} md={6}>
            <Ratio aspectRatio="16x9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63699.63594931698!2d-38.585291047120826!3d-3.7606485388443835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74f3407fa79c9%3A0xa550d1b47857c124!2sComag%20Compressores!5e0!3m2!1spt-BR!2sbr!4v1746497648097!5m2!1spt-BR!2sbr"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localização no Google Maps"
              ></iframe>
            </Ratio>
          </Col>
        </Row>
      </Container>
    </div>

    </>
  );

}

