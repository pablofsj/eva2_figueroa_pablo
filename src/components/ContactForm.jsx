import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  

  const [activeField, setActiveField] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });


    if (value.trim() === '') {
      setErrors((prev) => ({ ...prev, [name]: 'Este campo es obligatorio.' }));
    } else {
      let newErrors = { ...errors };
      delete newErrors[name];
      if (name === 'email' && !validateEmail(value)) {
        newErrors.email = 'Formato de correo electrónico inválido.';
      }
      setErrors(newErrors);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
    if (!formData.email.trim()) newErrors.email = 'El correo electrónico es obligatorio.';
    else if (!validateEmail(formData.email)) newErrors.email = 'Formato de correo electrónico inválido.';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio.';

    setErrors(newErrors);


    if (Object.keys(newErrors).length === 0) {
      setSuccessMsg('¡Mensaje enviado con éxito! Nos pondremos en contacto a la brevedad.');
      setFormData({ name: '', email: '', message: '' }); 
      setTimeout(() => setSuccessMsg(''), 5000);
    } else {
      setSuccessMsg('');
    }
  };


  const handleFocus = (fieldName) => {

    setActiveField(fieldName);
  };

  const handleBlur = () => {

    setActiveField('');
  };

  return (
    <section className="py-5 bg-light" id="contacto">
      <Container>
        <Row className="justify-content-center my-4">
          <Col md={8}>
            <div className="bg-white p-5 rounded-4 shadow-lg border-0 form-wrapper">
              <h2 className="text-center mb-4 font-weight-bold" style={{ color: 'var(--primary-color)' }}>
                Contacto Ciudadano
              </h2>
              <p className="text-center text-muted mb-5 fs-5">
                Envíanos tus consultas, sugerencias o reclamos a través de este formulario.
              </p>

              {successMsg && <Alert variant="success" className="animate__animated animate__fadeIn py-3 fs-5 text-center shadow-sm">{successMsg}</Alert>}

              <Form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label className="fw-semibold">Nombre Completo</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Ej. Juan Pérez" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    isInvalid={!!errors.name}
                    className="custom-input py-2"
                  />
                  {activeField === 'name' && !errors.name && (
                    <Form.Text className="text-info fw-medium animate__animated animate__fadeIn">
                      <small>Ingresa tus nombres y apellidos completos.</small>
                    </Form.Text>
                  )}
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label className="fw-semibold">Correo Electrónico</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="ejemplo@correo.com" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    isInvalid={!!errors.email}
                    className="custom-input py-2"
                  />
                  {activeField === 'email' && !errors.email && (
                    <Form.Text className="text-info fw-medium animate__animated animate__fadeIn">
                      <small>A este correo te enviaremos nuestra respuesta formal.</small>
                    </Form.Text>
                  )}
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="fw-semibold">Mensaje o Solicitud</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    placeholder="Escribe tu mensaje o solicitud detallada aquí..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    isInvalid={!!errors.message}
                    className="custom-input py-2"
                  />
                   {activeField === 'message' && !errors.message && (
                    <Form.Text className="text-info fw-medium animate__animated animate__fadeIn">
                      <small>Sé lo más descriptivo posible para agilizar tu trámite.</small>
                    </Form.Text>
                  )}
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid gap-2 mt-5">
                  <Button variant="primary" type="submit" size="lg" className="rounded-pill shadow fw-bold py-3 hero-btn border-0">
                    Enviar Mensaje
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
