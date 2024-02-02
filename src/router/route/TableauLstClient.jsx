import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import EnteteTableau from '../../components/client/EnteteTableau';
import CorpTableau from '../../components/client/CorpTableau';
import Header from '../../components/global/Header';
import NavbarVeterinaire from '../../components/veterinaire/NavbarVeterinaire';

function TableauLstClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const champs = ['Nom', 'Prenom', 'Ville', 'Code Postal', 'Telephone'];
  return (
    <>
      <Header />
      <NavbarVeterinaire currentPage="clients" />
      <Table striped className="Table">
        <EnteteTableau champs={champs} onSearchTerm={setSearchTerm} />
        <CorpTableau search={searchTerm} />
      </Table>
    </>
  );
}

export default TableauLstClient;
