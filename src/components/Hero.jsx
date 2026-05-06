import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {

  const [hoverText, setHoverText] = useState('');


  const handleMouseOver = () => {

    setHoverText('Conoce nuestra hoja de ruta y los pilares estratégicos de la comuna.');
  };


  const handleMouseOut = () => {
    setHoverText('');
  };

  return (
    <section className="hero-section" id="home">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={10}>
            <h1>Plan de Desarrollo Comunal (PLADECO) 2025-2029</h1>
            <p className="lead mb-4">
              El principal instrumento rector del desarrollo de nuestra comuna. Te invitamos a conocer el plan estratégico que definirá el futuro de Cholchol en los próximos años.
            </p>
            <a 
              href="https://drive.google.com/file/d/1Qrjbyux_mwpAbd4eD1wuEygNfXh2Jnlt/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn hero-btn text-decoration-none shadow-lg"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              aria-label="Ver documento PLADECO 2025-2029"
            >
              Ver PLADECO 25-29
            </a>
            <div className="dynamic-text">

              {hoverText && <p className="mb-0 animate__animated animate__fadeIn">{hoverText}</p>}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
