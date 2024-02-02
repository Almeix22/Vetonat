import React from 'react';
import Contact from '../../components/client/Contact';
import Header from '../../components/global/Header.jsx';
import NavbarClient from '../../components/client/NavbarClient.jsx';

function ContactPage() {
  return (
    <>
      <Header />
      <NavbarClient currentPage='contact' />
      <Contact />
    </>
  );
}

export default ContactPage;
