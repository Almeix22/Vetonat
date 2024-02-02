import React from 'react';
import Header from '../../components/global/Header';
import NavbarVeterinaire from '../../components/veterinaire/NavbarVeterinaire';
import PlanningVeto from '../../components/consultation/PlanningVeto';

function PlanningVetoPage() {
  return (
    <>
      <Header />
      <NavbarVeterinaire currentPage="planning" />
      <div className="planningCss">
        <PlanningVeto />
      </div>
    </>
  );
}

export default PlanningVetoPage;
