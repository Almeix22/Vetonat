import React from 'react';
import InfoConsultation from '../../components/veterinaire/InfoConsultation';
import Header from "../../components/global/Header.jsx";
import NavbarVeterinaire from "../../components/veterinaire/NavbarVeterinaire.jsx";

function InfoRDV() {
  return (
      <>
      <Header />
      <NavbarVeterinaire/>
    <InfoConsultation />
      </>
  );
}

export default InfoRDV;
