import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { Container, Alert } from 'react-bootstrap';

const HomeContainer = () => {

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      

      {showAlert && (
        <Container className="mt-3">
          <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
            <strong>Aviso Importante:</strong> El proceso de pago de patentes comerciales ya se encuentra habilitado online.
          </Alert>
        </Container>
      )}

      <main>
        <Hero />
        <Services />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
};

export default HomeContainer;
