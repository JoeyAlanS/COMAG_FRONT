import { useState, ChangeEvent, FormEvent } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWhatsapp, faFacebook, faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMapMarker, faPhone, faEnvelope 
} from '@fortawesome/free-solid-svg-icons';
import { apiService } from '../services/api';
import { useLocation } from 'react-router-dom';

interface FormFields {
  name: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  company: string;
  subject: string;
  message: string;
}

export function Contatos() {
  const location = useLocation();
  const [fields, setFields] = useState<FormFields>({
    name: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    company: '',
    subject: location.state?.product || location.state?.service || '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, message: '' });

    try {
      await apiService.createBudget({
        nome: fields.name,
        email: fields.email,
        telefone: fields.phone,
        nomeEmpresa: fields.company,
        sedeEmpresa: `${fields.city}, ${fields.state}`,
        equipamento: fields.subject,
        data: new Date().toISOString(),
        mensagem: fields.message
      });

      setStatus({
        loading: false,
        success: true,
        message: 'Orçamento enviado com sucesso! Em breve entraremos em contato.'
      });
      setFields({
        name: '',
        phone: '',
        email: '',
        city: '',
        state: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        message: error instanceof Error ? error.message : 'Erro ao enviar formulário'
      });
    }
  };

const validateForm = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
  
  const phone = formatPhone(fields.phone);
  
return (
    fields.name.trim().length >= 3 &&
    phoneRegex.test(fields.phone) &&
    emailRegex.test(fields.email) &&
    fields.city.trim().length >= 3 &&
    fields.state.trim().length === 2 &&
    fields.company.trim().length >= 3 &&
    fields.subject.trim().length >= 3
  );
};

  const formatPhone = (phone: string) => {
  return phone.replace(/\D/g, '');
};

const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value.replace(/\D/g, '');
  
  // Limita a 11 dígitos (com DDD)
  if (value.length > 11) {
    value = value.substring(0, 11);
  }
  
  // Formatação do telefone
  let formattedValue = value;
  if (value.length > 0) {
    formattedValue = `(${value.substring(0, 2)}`;
    if (value.length > 2) {
      formattedValue += `) ${value.substring(2, 7)}`;
      if (value.length > 7) {
        formattedValue += `-${value.substring(7, 11)}`;
      }
    }
  }
  
  setFields(prev => ({ ...prev, phone: formattedValue }));
};

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col lg={8}>
          <h2 className="mb-4">Solicite seu Orçamento</h2>
          
          {status.message && (
            <Alert variant={status.success ? 'success' : 'danger'} dismissible>
              {status.message}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    required
                    disabled={status.loading}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Telefone</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={fields.phone}
                      onChange={handlePhoneChange}
                      placeholder="(00) 00000-0000"
                      required
                      disabled={status.loading}
                      isInvalid={!!fields.phone && !/^\(\d{2}\) \d{4,5}-\d{4}$/.test(fields.phone)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Informe um telefone válido com DDD
                    </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    required
                    disabled={status.loading}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Empresa</Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    value={fields.company}
                    onChange={handleChange}
                    required
                    disabled={status.loading}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={fields.city}
                    onChange={handleChange}
                    required
                    disabled={status.loading}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Estado (UF)</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={fields.state}
                    onChange={handleChange}
                    maxLength={2}
                    required
                    disabled={status.loading}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Assunto/Produto de Interesse</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={fields.subject}
                onChange={handleChange}
                required
                disabled={status.loading}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                value={fields.message}
                onChange={handleChange}
                disabled={status.loading}
              />
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status.loading || !validateForm()}
            >
              {status.loading ? (
                <>
                  <Spinner size="sm" className="me-2" />
                  Enviando...
                </>
              ) : 'Enviar Mensagem'}
            </Button>
          </Form>
        </Col>

        <Col lg={4} className="mt-5 mt-lg-0">
          <div className="bg-light p-4 rounded">
            <h4 className="mb-4">Nossos Contatos</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="https://wa.me/5585991499829" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className="me-2 text-success" />
                  (85) 99149-9829
                </a>
              </li>
              <li className="mb-3">
                <a href="mailto:consul.barbosa@hotmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  consul.barbosa@hotmail.com
                </a>
              </li>
              <li className="mb-3">
                <a href="https://instagram.com/comag.compressores" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="me-2 text-danger" />
                  @comag.compressores
                </a>
              </li>
              <li className="mb-3">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="me-2 text-primary" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faMapMarker} className="me-2 text-warning" />
                  Av. Governador Raul Barbosa, 6294 - Fortaleza/CE
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}