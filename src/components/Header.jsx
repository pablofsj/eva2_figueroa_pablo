import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal, Table } from 'react-bootstrap';

const contactsData = [
  { id: 1, area: "INFORMACIONES", anexo: "452 734200" },
  { id: 2, area: "OMIL", anexo: "452 734236" },
  { id: 3, area: "SUBSIDIOS Y PENSIONES 1", anexo: "452 734230" },
  { id: 4, area: "SUBSIDIOS Y PENSIONES 2", anexo: "452 734229" },
  { id: 5, area: "PROGRAMA MUJER TRABAJADORA Y JEFAS DE HOGAR", anexo: "452 734224" },
  { id: 6, area: "HIDRICO", anexo: "452 734246" },
  { id: 7, area: "DAF", anexo: "452 734238" },
  { id: 8, area: "RENTAS Y PATENTES DAF", anexo: "452 734249" },
  { id: 9, area: "RRHH 1", anexo: "452 734220" },
  { id: 10, area: "RRHH 2", anexo: "452 734216" },
  { id: 11, area: "DIRECCIÓN DE OBRAS MUNICIPAL", anexo: "452 734213" },
  { id: 12, area: "OPERACIONES", anexo: "452 734202" },
  { id: 13, area: "PROGRAMAS EXTRA PRESUPUESTARIOS", anexo: "452 734260" },
  { id: 14, area: "CAJA", anexo: "452 734233" },
  { id: 15, area: "ENCARGADO VIVIENDA", anexo: "452 734211" },
  { id: 16, area: "AYUDA SOCIAL", anexo: "452 734215" },
  { id: 17, area: "DIRECTOR DE CONTROL", anexo: "452 734237" },
  { id: 18, area: "SECRETARIA DIDECO", anexo: "452 734243" },
  { id: 19, area: "ADMINISTRACIÓN", anexo: "452 734241" },
  { id: 20, area: "SECRETARIA ADMINISTRACIÓN", anexo: "452 734247" },
  { id: 21, area: "ASESOR JURÍDICO", anexo: "452 734259" },
  { id: 22, area: "UNIDAD GRD", anexo: "452 734264" },
  { id: 23, area: "TRANSITO 1", anexo: "452 734217" },
  { id: 24, area: "TRANSITO 2", anexo: "452 734250" },
  { id: 25, area: "TRANSPARENCIA", anexo: "452 734254" },
  { id: 26, area: "SECRETARIA MUNICIPAL", anexo: "452 734210" },
  { id: 27, area: "SEC. SECRETARIA MUNICIPAL", anexo: "452 734225" },
  { id: 28, area: "SEC. ADQUISICIONES", anexo: "452 734209" },
  { id: 29, area: "TESORERIA", anexo: "452 734258" },
  { id: 30, area: "PROGRAMA FAMILIAS 1", anexo: "452 734218" },
  { id: 31, area: "PROGRAMA FAMILIAS 2", anexo: "452 734235" },
  { id: 32, area: "SECRETARIA DEFICIT HIDRICO", anexo: "452 734227" },
  { id: 33, area: "REGISTRO SOCIAL DE HOGARES", anexo: "452 734212" },
  { id: 34, area: "MEDIO AMBIENTE", anexo: "452 734208" },
  { id: 35, area: "SECRETARIA HIDRICO", anexo: "452 734227" },
  { id: 36, area: "ORGANIZACIONES", anexo: "452 734252" },
  { id: 37, area: "SECRETARIA DIRECCIÓN DE OBRAS", anexo: "452 734240" },
  { id: 38, area: "DISCAPACIDAD", anexo: "452 734248" },
  { id: 39, area: "MARIA ARMIJO", anexo: "452 734234" }
];

const Header = () => {
  const [highContrast, setHighContrast] = useState(false);
  const [showContacts, setShowContacts] = useState(false);


  const toggleContrast = () => {
    if (!highContrast) {
      document.body.classList.add('high-contrast-mode');
    } else {
      document.body.classList.remove('high-contrast-mode');
    }
    setHighContrast(!highContrast);
  };

  return (
    <>
      <header>
        <Navbar expand="lg" className="navbar-custom py-3" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home" aria-label="Inicio Municipalidad de Cholchol">
              <img 
                src="https://municholchol.cl/images/147/24327548/loggo-chico-mini-letrasblancas-tvKgkW5VNXE40IuRBlPVbw.png" 
                alt="Logo Municipalidad de Cholchol"
                className="navbar-logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto align-items-center fw-medium">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#servicios">Servicios</Nav.Link>
                

                <Nav.Link as="button" className="btn btn-link px-2 nav-link text-decoration-none" onClick={() => setShowContacts(true)}>
                  Directorio Telefónico
                </Nav.Link>

                <Nav.Link href="#contacto">Contacto</Nav.Link>
                

                <Nav.Link href="https://municholchol.cl:2096/webmaillogout.cgi" target="_blank" rel="noopener noreferrer">
                  Intranet Municipal
                </Nav.Link>
                
                <Button 
                  variant={highContrast ? "light" : "outline-light"} 
                  size="sm" 
                  className="ms-3 rounded-pill px-3 fw-bold shadow-sm"
                  onClick={toggleContrast}
                  aria-label="Alternar alto contraste para accesibilidad"
                >
                  {highContrast ? 'Modo Normal' : 'Alto Contraste'}
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>


      <Modal show={showContacts} onHide={() => setShowContacts(false)} size="lg" centered>
        <Modal.Header closeButton className="bg-light">
          <Modal.Title className="fw-bold" style={{ color: 'var(--primary-color)' }}>
            Directorio Telefónico Municipal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '65vh', overflowY: 'auto' }} className="p-0">
          <Table striped hover responsive className="mb-0">
            <thead className="table-dark" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
              <tr>
                <th className="text-center" style={{ width: '10%' }}>#</th>
                <th style={{ width: '60%' }}>Área / Departamento</th>
                <th className="text-center" style={{ width: '30%' }}>Anexo</th>
              </tr>
            </thead>
            <tbody>
              {contactsData.map((contact) => (
                <tr key={contact.id}>
                  <td className="text-center">{contact.id}</td>
                  <td className="fw-medium text-uppercase" style={{ fontSize: '0.9rem' }}>{contact.area}</td>
                  <td className="text-center fw-bold text-primary">{contact.anexo}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer className="bg-light">
          <Button variant="secondary" onClick={() => setShowContacts(false)}>Cerrar Directorio</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
