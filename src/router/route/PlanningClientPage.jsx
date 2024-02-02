import React from 'react';
import PlanningClient from '../../components/consultation/PlanningClient';
import Header from '../../components/global/Header';
import NavbarClient from '../../components/client/NavbarClient';

function PlanningClientPage() {
  return (
    <>
      <Header />
      <NavbarClient currentPage='planning' />
      <PlanningClient />
    </>
  );
}

export default PlanningClientPage;
