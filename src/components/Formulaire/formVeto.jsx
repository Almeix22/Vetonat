import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useState } from 'react';

function FormVeto() {
  const [vetoData, setVeto] = useState([]);
  useEffect(() => {
    fetch('https://127.0.0.1:8000/api/me', { credentials: 'include' })
      .then((res) => res.json())
      .then(
        (result) => {
          setVeto(result);
        },
      );
  }, []);
  return (
    <Form method="get" className="FormulaireCorp">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="name">
          <InputGroup className="mb-3 NameFirstName">
            <InputGroup.Text className="NameFirstName">Prénom et Nom</InputGroup.Text>
            <Form.Control name="Prenom" defaultValue={vetoData.pnomPers} />
            <Form.Control name="Nom" defaultValue={vetoData.nomPers} />
          </InputGroup>
        </Form.Group>
      </Row>
      <Form.Group className="FormulaireChamp">
        <Form.Label>
          Téléphone
          <Form.Control name="Telephone" placeholder="Téléphone" defaultValue={vetoData.telPers} />
        </Form.Label>
      </Form.Group>
      <Form.Group className="FormulaireChamp">
        <Form.Label>Pseudo</Form.Label>
        <Form.Control placeholder="Pseudo" name="Pseudo" defaultValue={vetoData.loginPers} />
      </Form.Group>
      <Row>
        <Form.Group as={Col} controlId="Adresse" className="FormulaireChamp">
          <Form.Label>Adresse</Form.Label>
          <Form.Control placeholder="Adresse" name="Adresse" defaultValue={vetoData.adrPers} />
        </Form.Group>
        <Form.Group as={Col} controlId="Ville" className="FormulaireChamp">
          <Form.Label>Ville</Form.Label>
          <Form.Control placeholder="Ville" name="Ville" defaultValue={vetoData.villePers} />
        </Form.Group>
        <Form.Group as={Col} className="FormulaireChamp">
          <Form.Label>Code Postal</Form.Label>
          <Form.Control name="CP" type="text" placeholder="Code Postal" defaultValue={vetoData.CPPers} />
        </Form.Group>
      </Row>
    </Form>
  );
}

export default FormVeto;
