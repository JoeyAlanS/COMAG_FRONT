import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner, Alert, Button } from 'react-bootstrap';
import { apiService, Service } from '../services/api';
import { Link } from 'react-router-dom';

export function Servicos() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await apiService.getServices();
        // Adiciona imagens padrão se não existirem
        const servicesWithImages = data.map(service => ({
          ...service,
          image: service.image || '/img/servicos/default-service.jpg'
        }));
        setServices(servicesWithImages);
      } catch (err) {
        console.error("Failed to load Services:", err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="my-5">
        {error}
      </Alert>
    );
  }

  return (
    <div id="servicos" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2>Nossos Serviços</h2>
          <p className="lead">Soluções especializadas para suas necessidades</p>
        </div>
        
        <Row xs={1} md={2} lg={3} className="g-4">
          {services.map((service) => (
            <Col key={service.id}>
              <Card className="h-100 shadow-sm border-0">
                <div className="ratio ratio-16x9">
                  <Card.Img
                    variant="top"
                    src={
                      service.image.startsWith('data:image') // Check if it's a base64 string
                        ? service.image // Use the base64 string directly
                        : `/img/servicos/${service.image}` // Otherwise, use the image path
                    }
                    alt={service.name}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-4">{service.name}</Card.Title>
                  <Card.Subtitle className="mb-3 text-primary fw-bold">
                    <span className="text-secondary">A partir de</span> R${service.price.toFixed(2)}
                    {service.duration && <span className="text-muted"> • {service.duration}</span>}
                  </Card.Subtitle>
                  <Card.Text className="flex-grow-1 text-muted">
                    {service.description}
                  </Card.Text>
                  <div className="d-grid mt-3">
                    <Link
                      to="/contatos"
                      state={{ service: service.name }}
                      className="btn btn-primary"
                    >
                      Contratar Serviço
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}