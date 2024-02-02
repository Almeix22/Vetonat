import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteAnimal() {
  const [moi, setDatamoi] = useState(['']);
  const { id } = useParams();
  const navigate = useNavigate();
  // eslint-disable-next-line no-shadow
  const HandleClick = () => {
    fetch(`https://127.0.0.1:8000/api/animals/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then(() => navigate(-1));
  };
  useEffect(() => {
    fetch('https://127.0.0.1:8000/api/me', { credentials: 'include' })
  .then((result) => result.json())
  .then(
    (result) => {
      setDatamoi(result["roles"]);
    },
  );
}, []);

  let page = "http://localhost:5173/animaux";
  if (moi !== undefined) {
    if((moi.indexOf('ROLE_ADMIN')) !== -1){
        page = "http://localhost:5173/lstClients";
    }
};
  return (

    // eslint-disable-next-line react/react-in-jsx-scope
    <Form className="FormulaireCorp">
      Etes-vous sur de vouloir Supprimer cet animal ?
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Button className="FormulaireDeleteBouton" variant="primary" onClick={HandleClick}>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
          Confirmer
      </Button>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Button className="FormulaireDeleteBouton" variant="primary">
        <a href={page}>
          Annuler
        </a>
      </Button>

    </Form>
  );
}

export default DeleteAnimal;
