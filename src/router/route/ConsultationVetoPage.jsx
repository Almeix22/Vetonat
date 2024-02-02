import React from 'react';
import ConsultationVeto from '../../components/consultation/ConsultationVeto';
import Header from '../../components/global/Header';
import NavbarVeterinaire from '../../components/veterinaire/NavbarVeterinaire';

function ConsultationVetoPage() {
  return (
    <>
      <Header />
      <NavbarVeterinaire />
      <ConsultationVeto />
    </>
  );
}

export default ConsultationVetoPage;
