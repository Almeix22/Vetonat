import React from 'react';
import Header from '../../components/global/Header';
import NavbarVeterinaire from '../../components/veterinaire/NavbarVeterinaire';
import FormVeto from "../../components/Formulaire/formVeto";

function InfosVeto() {
  return (
    <>
        <Header />
        <NavbarVeterinaire currentPage="infos" />
        <FormVeto />
    </>
  );
}

export default InfosVeto;
