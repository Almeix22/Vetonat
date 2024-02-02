import React from 'react';
import NavbarClient from '../../components/client/NavbarClient';
import NavbarVeterinaire from '../../components/veterinaire/NavbarVeterinaire';
import Header from '../../components/global/Header';
import Infos from '../../components/veterinaire/Infos';

function TestNavBar() {
  return (
    <>
      <Header />
      <NavbarClient />
      <NavbarVeterinaire />
      <Infos />
    </>
  );
}

export default TestNavBar;
