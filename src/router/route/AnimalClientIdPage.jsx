import React from 'react';
import Header from '../../components/global/Header.jsx';
import AnimalClientId from '../../components/client/AnimalClientId.jsx';
import NavbarVeterinaire from "../../components/veterinaire/NavbarVeterinaire.jsx";
function AnimalClientIdPage() {
  return (
    <>
      <Header />
      <NavbarVeterinaire currentPage="animauxClient" />
      <AnimalClientId />
    </>
  );
}
export default AnimalClientIdPage;
