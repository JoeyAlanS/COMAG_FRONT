import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarker, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { text } from '@fortawesome/fontawesome-svg-core';

const initialState = {
  name: '',
  phone: '',
  city: '',
  state: '',
  email: '',
  subject: '',
  company: '',
  message: '',
};
const linkStyle= {
  textDecoration: 'none',
};


export function Contact() {
  const [fields, setFieldsState] = useState(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFieldsState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(fields);
    // Add email sending logic here
    setFieldsState(initialState);
  };

  return (
    <div>
      <div id="contact">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <div className="section-title">
                <h2>Solicite seu orçamento</h2>
              </div>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={fields.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Telefone"
                        value={fields.phone}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="city"
                        placeholder="Coloque sua Cidade"
                        value={fields.city}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="state"
                        placeholder="Estado"
                        value={fields.state}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={fields.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="subject"
                        placeholder="Assunto"
                        value={fields.subject}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="company"
                        placeholder="Nome da Empresa"
                        value={fields.company}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        name="message"
                        placeholder="Mensagem"
                        rows={1}
                        value={fields.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button type="submit" className="btn btn-primary btn-block mt-3">
                  Enviar Mensagem
                </Button>
              </Form>
            </Col>
            <Col md={4}>
              <div className="contact-item">
                <ul>
                  <li>
                    <a href="https://wa.me/5585991499829" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                      <FontAwesomeIcon icon={faWhatsapp} /> Enviar WhatsApp
                    </a>
                  </li>
                  <li>
                    <a href="tel:+5585991499829" style={linkStyle}>
                      <FontAwesomeIcon icon={faPhone} /> (85) 99149-9829
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                      <FontAwesomeIcon icon={faFacebook} /> Página do Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/comag.compressores" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                      <FontAwesomeIcon icon={faInstagram} /> comag.compressores
                    </a>
                  </li>
                  <li>
                    <a href="mailto:consul.barbosa@hotmail.com" style={linkStyle}>
                      <FontAwesomeIcon icon={faEnvelope} /> consul.barbosa@hotmail.com
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.google.com/maps?q=Avenida+Governador+Raul+Barbosa,+6294,+Aerolândia+-+Fortaleza/CE" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={linkStyle}
                    >
                      <FontAwesomeIcon icon={faMapMarker} /> Avenida Governador Raul Barbosa, 6294, Aerolândia - Fortaleza/CE
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            COPYRIGHTS COMAG.COM. TODOS OS DIREITOS RESERVADOS
          </p>
        </div>
      </div>
    </div>
  );
}
