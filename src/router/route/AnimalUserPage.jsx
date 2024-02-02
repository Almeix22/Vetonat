import React from 'react';
import AnimalUser from '../../components/client/AnimalUser';
import Header from '../../components/global/Header.jsx';
import NavbarClient from "../../components/client/NavbarClient.jsx";

function AnimalUserPage() {
  return (
    <>
      <Header />
      <NavbarClient currentPage="animaux" />
      <AnimalUser />
    </>
  );
}

export default AnimalUserPage;
