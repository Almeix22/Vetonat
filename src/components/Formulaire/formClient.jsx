import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from "react";

function FormClient(props) {
  // eslint-disable-next-line react/prop-types
  const { client } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const nom = e.target.Nom.value;
    const prenom = e.target.Prenom.value;
    const tel = e.target.Telephone.value;
    const pseudo = e.target.Pseudo.value;
    const mdp = e.target.password.value;
    const adr = e.target.Adresse.value;
    const ville = e.target.Ville.value;
    const CP = e.target.CP.value;

    if (client === undefined) {
      fetch('https://127.0.0.1:8000/api/clients', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personne: {
            nomPers: nom,
            pnomPers: prenom,
            villePers: ville,
            CPPers: CP,
            telPers: tel,
            loginPers: pseudo,
            mdpPers: mdp,
            adrPers: adr,
            roles: [
              'string',
            ],
          },
        }),
      })
        .then(() => navigate(-1));
    } else {
      fetch(`https://127.0.0.1:8000/api/clients/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
        credentials: 'include',
        body: JSON.stringify({
          personne: {
            nomPers: nom,
            pnomPers: prenom,
            villePers: ville,
            CPPers: CP,
            telPers: tel,
            loginPers: pseudo,
            mdpPers: mdp,
            adrPers: adr,
            roles: [
              'string',
            ],
          },
        }),
      })
        .then(() => navigate('/lstClients'));
    }
  };
  return (
    <Form method="get" className="FormulaireCorp" onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="name">
          <InputGroup className="mb-3 NameFirstName">
            <InputGroup.Text className="NameFirstName">Prénom et Nom</InputGroup.Text>
            <Form.Control required controlId="Prenom" name="Prenom" defaultValue={client?.personne?.pnomPers ?? ''} />
            <Form.Control required controlId="Nom" name="Nom" defaultValue={client?.personne?.nomPers ?? ''} />
          </InputGroup>
        </Form.Group>
      </Row>
      <Form.Group className="FormulaireChamp">
        <Form.Label>
          Téléphone
          <Form.Control name="Telephone" required type="tel" placeholder="Téléphone" defaultValue={client?.personne?.telPers ?? ''} />
        </Form.Label>
      </Form.Group>
      <Form.Group controlId="Pseudo" className="FormulaireChamp">
        <Form.Label>Pseudo</Form.Label>
        <Form.Control required placeholder="Pseudo" name="Pseudo" defaultValue={client?.personne?.loginPers ?? ''} />
      </Form.Group>
      <Form.Group controlId="password" className="FormulaireChamp">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Mot de Passe"
          required
          defaultValue={client?.personne?.mdpPers ?? ''}
        />
      </Form.Group>
      <Row>
        <Form.Group as={Col} controlId="Adresse" className="FormulaireChamp">
          <Form.Label>Adresse</Form.Label>
          <Form.Control required placeholder="Adresse" name="Adresse" defaultValue={client?.personne?.adrPers ?? ''} />
        </Form.Group>
        <Form.Group as={Col} controlId="Ville" className="FormulaireChamp">
          <Form.Label>Ville</Form.Label>
          <Form.Control required placeholder="Ville" name="Ville" defaultValue={client?.personne?.villePers ?? ''} />
        </Form.Group>
        <Form.Group as={Col} controlId="Cp" className="FormulaireChamp">
          <Form.Label>Code Postal</Form.Label>
          <Form.Control required name="CP" type="text" minlength="5" maxlength="5" placeholder="Code Postal" defaultValue={client?.personne?.CPPers ?? ''} />
        </Form.Group>
      </Row>

      <Button className="FormulaireBouton" variant="primary" type="submit">
        Envoyer
      </Button>
    </Form>
  );
}

export default FormClient;
