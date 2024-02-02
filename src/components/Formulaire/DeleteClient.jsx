import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteClient() {
  const { id } = useParams();
  const navigate = useNavigate();
  // eslint-disable-next-line no-shadow
  const HandleClick = () => {
    fetch(`https://127.0.0.1:8000/api/clients/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then(() => navigate('/lstClients'));
  };
  return (

    // eslint-disable-next-line react/react-in-jsx-scope
    <Form className="FormulaireCorp">
      Etes-vous sur de vouloir Supprimer ce client ?
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Button className="FormulaireDeleteBouton" variant="primary" onClick={HandleClick}>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
          Confirmer
      </Button>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Button className="FormulaireDeleteBouton" variant="primary">
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <a href="http://localhost:5173/lstClients">
          Annuler
        </a>
      </Button>

    </Form>
  );
}

export default DeleteClient;
