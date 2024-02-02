import React from 'react';
import Header from '../../components/global/Header';
import NavbarVeterinaire from '../../components/veterinaire/NavbarVeterinaire';
import AnimalUserVeto from "../../components/veterinaire/AnimalUserVeto";

function PageAnimalUserVeto() {
    return (
        <>
            <Header />
            <NavbarVeterinaire currentPage="infos" />
            <AnimalUserVeto />
        </>
    );
}

export default PageAnimalUserVeto;
