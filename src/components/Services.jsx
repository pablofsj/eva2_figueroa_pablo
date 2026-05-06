import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const initialServices = [
  { 
    id: 1, 
    title: 'Permiso de Circulación', 
    icon: '🚗', 
    description: 'Paga tu permiso de circulación de forma rápida y segura 100% online.',
    link: 'https://cholcholpagos.insico.cl/PermisoCirculacion'
  },
  { 
    id: 2, 
    title: 'Pago de Aseo', 
    icon: '🗑️', 
    description: 'Regulariza tus derechos de aseo municipal a través de nuestra plataforma.' 
  },
  { 
    id: 3, 
    title: 'Dirección de Obras', 
    icon: '🏗️', 
    description: 'Solicita certificados y permisos de edificación.' 
  },
];

const extraServices = [
  { id: 4, title: 'Patentes Comerciales', icon: '🏪', description: 'Renovación y pago de patentes para tu negocio.' },
  { id: 5, title: 'Registro Social de Hogares', icon: '🏠', description: 'Actualiza o solicita tu cartola del Registro Social de Hogares.' },
  { id: 6, title: 'Subsidios y Becas', icon: '🎓', description: 'Postulación a beneficios sociales y estudiantiles.' },
];

const Services = () => {
  const [services, setServices] = useState(initialServices);
  const [showMore, setShowMore] = useState(false);


  const toggleServices = () => {
    if (showMore) {
      setServices(initialServices);
      setShowMore(false);
    } else {
      setServices([...initialServices, ...extraServices]);
      setShowMore(true);
    }
  };

  return (
    <section className="py-5" id="servicios">
      <Container>
        <div className="text-center mb-5">
          <h2>Servicios Municipales Destacados</h2>
          <p className="text-muted">Accede a nuestros trámites más solicitados</p>
        </div>
        <Row>
          {services.map((service) => (
            <Col md={4} className="mb-4" key={service.id}>
              <Card className="service-card text-center border-0 h-100">
                <Card.Body className="d-flex flex-column">
                  <div className="service-icon" aria-hidden="true">{service.icon}</div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {service.description}
                  </Card.Text>
                  {service.link ? (
                    <a href={service.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm mt-auto">
                      Ingresar al Trámite
                    </a>
                  ) : (
                    <Button variant="outline-primary" size="sm" className="mt-auto">
                      Ingresar
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button 
            variant="primary" 
            onClick={toggleServices}
            aria-expanded={showMore}
            aria-controls="servicios-adicionales"
          >
            {showMore ? 'Ver menos servicios' : 'Ver todos los servicios'}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Services;
