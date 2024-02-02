import React from 'react';
import NavbarClient from '../../components/client/NavbarClient';
import ConsultationClient from '../../components/consultation/ConsultationClient';
import Header from '../../components/global/Header';

function ConsultationClientPage() {
  return (
    <>
      <Header />
      <NavbarClient />
      <ConsultationClient />
    </>
  );
}

export default ConsultationClientPage;
