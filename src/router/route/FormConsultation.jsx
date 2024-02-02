import React, { useEffect, useState } from 'react';
import Header from '../../components/global/Header.jsx';
import FormConsultation from "../../components/Formulaire/FormConsultation.jsx";
import NavbarVeterinaire from '../../components/veterinaire/NavbarVeterinaire.jsx';
import NavbarClient from '../../components/client/NavbarClient.jsx';

function FormClient() {
    const [moi, setDatamoi] = useState(['']);
    useEffect(() => {
        fetch('https://127.0.0.1:8000/api/me', { credentials: 'include' })
      .then((result) => result.json())
      .then(
        (result) => {
          setDatamoi(result["roles"]);
        },
      );
  }, []);

  let navbar= <div className="colorAccueil"/> ;
  if (moi !== undefined) {
        if((moi.indexOf('ROLE_USER')) !== -1){
            navbar = <NavbarClient/>
        }
        if((moi.indexOf('ROLE_ADMIN')) !== -1){
            navbar = <NavbarVeterinaire/>
        }
    }
    return (
        <>
            <Header />
            {navbar}
            <FormConsultation />
        </>
    );
}

export default FormClient;
