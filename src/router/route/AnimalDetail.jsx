import React, { useEffect, useState } from 'react';
// eslint-disable-next-line max-len
// eslint-disable-next-line import/extensions,import/no-named-as-default,import/no-named-as-default-member
import AnimalDetail from '../../components/client/AnimalDetail.jsx';
import Header from '../../components/global/Header.jsx';
import NavbarClient from '../../components/client/NavbarClient.jsx';
import NavbarVeterinaire from '../../components/veterinaire/NavbarVeterinaire.jsx';

function AnimalDetailPage() {
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
      <AnimalDetail />
    </>
  );
}

export default AnimalDetailPage;
