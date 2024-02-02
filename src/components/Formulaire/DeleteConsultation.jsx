import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteConsultation() {
  const [moi, setDatamoi] = useState(['']);
  const { id } = useParams();
  const navigate = useNavigate();
  const HandleClick = () => {
    fetch(`https://127.0.0.1:8000/api/consultations/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then(() => navigate('/veterinaire'));
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

  let page = "http://localhost:5173/client";
  if (moi !== undefined) {
        if((moi.indexOf('ROLE_ADMIN')) !== -1){
            page = "http://localhost:5173/veterinaire";
        }
    }
  return (

    <Form className="FormulaireCorp">
      Etes-vous sur de vouloir Supprimer cet Consultation ?
      <Button className="FormulaireDeleteBouton" variant="primary" onClick={HandleClick}>
        Confirmer
      </Button>
      <Button className="FormulaireDeleteBouton" variant="primary">
        <a href={page}>
          Annuler
        </a>
      </Button>

    </Form>
  );
}

export default DeleteConsultation;
