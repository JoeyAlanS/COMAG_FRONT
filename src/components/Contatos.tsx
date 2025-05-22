import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWhatsapp, faFacebook, faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMapMarker, faPhone, faEnvelope 
} from '@fortawesome/free-solid-svg-icons';
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

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(validateForm());
  }, [fields]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!formValid) {
      setStatus({
        loading: false,
        success: false,
        message: 'Por favor, preencha todos os campos corretamente'
      });
      return;
    }

    setStatus({ loading: true, success: false, message: '' });

    // Monta o corpo do email
    const emailBody = `
      Nome: ${fields.name}
      Telefone: ${fields.phone}
      Email: ${fields.email}
      Empresa: ${fields.company}
      Cidade/Estado: ${fields.city}, ${fields.state}
      Assunto: ${fields.subject}
      Mensagem: ${fields.message}
      
      ---
      Mensagem enviada através do site COMAG
    `;

    // Codifica o conteúdo para URL
    const encodedBody = encodeURIComponent(emailBody);
    const encodedSubject = encodeURIComponent(`Novo contato: ${fields.subject}`);

    // Abre o cliente de email padrão
    window.location.href = `mailto:consul.barbosa@hotmail.com?subject=${encodedSubject}&body=${encodedBody}`;

    setStatus({
      loading: false,
      success: true,
      message: 'Abrindo seu cliente de email...'
    });

    // Limpa o formulário
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
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regex simplificada para telefone brasileiro
    const phoneRegex = /^[\d\s()-]{10,15}$/;
    
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

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 11) {
      value = value.substring(0, 11);
    }
    
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
                    minLength={3}
                    disabled={status.loading}
                    isInvalid={fields.name.length > 0 && fields.name.trim().length < 3}
                  />
                  <Form.Control.Feedback type="invalid">
                    Nome deve ter pelo menos 3 caracteres
                  </Form.Control.Feedback>
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
                    isInvalid={!!fields.phone && !/^[\d\s()-]{10,15}$/.test(fields.phone)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Informe um telefone válido com DDD (ex: (85) 99149-9829)
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
                    isInvalid={!!fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Informe um email válido
                  </Form.Control.Feedback>
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
                    minLength={3}
                    disabled={status.loading}
                    isInvalid={fields.company.length > 0 && fields.company.trim().length < 3}
                  />
                  <Form.Control.Feedback type="invalid">
                    Nome da empresa deve ter pelo menos 3 caracteres
                  </Form.Control.Feedback>
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
                    minLength={3}
                    disabled={status.loading}
                    isInvalid={fields.city.length > 0 && fields.city.trim().length < 3}
                  />
                  <Form.Control.Feedback type="invalid">
                    Cidade deve ter pelo menos 3 caracteres
                  </Form.Control.Feedback>
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
                    minLength={2}
                    required
                    disabled={status.loading}
                    isInvalid={!!fields.state && fields.state.trim().length !== 2}
                  />
                  <Form.Control.Feedback type="invalid">
                    Informe a sigla do estado (2 caracteres)
                  </Form.Control.Feedback>
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
                minLength={3}
                disabled={status.loading}
                isInvalid={fields.subject.length > 0 && fields.subject.trim().length < 3}
              />
              <Form.Control.Feedback type="invalid">
                Assunto deve ter pelo menos 3 caracteres
              </Form.Control.Feedback>
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
              disabled={status.loading || !formValid}
              style={{
                opacity: status.loading || !formValid ? 0.7 : 1,
                cursor: status.loading || !formValid ? 'not-allowed' : 'pointer'
              }}
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