import React from 'react';
import Faq from '../../components/client/Faq';
import NavbarClient from '../../components/client/NavbarClient.jsx';
import Header from '../../components/global/Header.jsx';

function FaqPage() {
  return (
    <>
      <Header />
      <NavbarClient currentPage="faq" />
      <Faq />
    </>
  );
}

export default FaqPage;
