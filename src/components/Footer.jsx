import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-custom">
      <Container>
        <Row className="align-items-center mb-4">
          <Col md={12} className="text-center mb-4">
            <img 
              src="https://municholchol.cl/images/418/15532412/LogoBlanco-1kvrb7hqrbc_97zinKs_0A.png" 
              alt="Logo Municipalidad de Cholchol" 
              className="footer-logo"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="text-white">Municipalidad de Cholchol</h5>
            <p className="text-light opacity-75">
              Comprometidos con el desarrollo de nuestra comuna y el bienestar de nuestros vecinos, brindando servicios eficientes y transparentes.
            </p>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="text-white">Enlaces Útiles</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU045" target="_blank" rel="noopener noreferrer">Transparencia Activa</a></li>
              <li className="mb-2"><a href="https://www.leylobby.gob.cl/instituciones/MU045" target="_blank" rel="noopener noreferrer">Ley de Lobby</a></li>
              <li className="mb-2"><a href="https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=498" target="_blank" rel="noopener noreferrer">Solicitud de información</a></li>
            </ul>
          </Col>
          <Col md={2} className="mb-4">
            <h5 className="text-white">Redes Sociales</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://www.instagram.com/municholchol_oficial/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center">
                  <i className="bi bi-instagram fs-4 me-2"></i> Instagram
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.tiktok.com/@municholchol?_t=ZM-8xaDKaosnJt&_r=1" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center">
                  <i className="bi bi-tiktok fs-4 me-2"></i> TikTok
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.youtube.com/@MunicipalidaddeCholcholOficial" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center">
                  <i className="bi bi-youtube fs-4 me-2"></i> YouTube
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="text-white">Contacto</h5>
            <p className="text-light opacity-75">
              📍 Dirección: José Joaquín Pérez, 449, Cholchol<br />
              📞 Teléfono: 452 734200<br />
              ✉️ Correo: oficinadepartes@municholchol.cl
            </p>
          </Col>
        </Row>
        <Row className="mt-3 border-top border-secondary pt-4">
          <Col className="text-center">
            <small className="text-light opacity-50">&copy; {new Date().getFullYear()} Municipalidad de Cholchol. Todos los derechos reservados.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
