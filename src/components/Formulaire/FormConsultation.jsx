import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';

function FormConsultation(props) {
  // eslint-disable-next-line react/prop-types
  const { consult } = props;
  const { id } = useParams();
  const navigate = useNavigate();

  // Récuperer les heures dispo a la date choisi
  const numbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  const listItems = numbers.map((h) => (
    <option value={h}>
      {h}
      :00 -
      {h + 2}
      :00
    </option>
  ));

  const [listItemsAnimaux, setListAnimals] = useState([]);
  // Recuperer les animaux du User
  useEffect(() => {
    fetch('https://127.0.0.1:8000/api/me/animals', { credentials: 'include' })
      .then((result) => result.json())
      .then(
        (result) => {
          setListAnimals(result['hydra:member']);
        },
      );
  }, []);
  let res = '';
  if (listItemsAnimaux === undefined) {
    setListAnimals([]);
  } else {
    res = listItemsAnimaux.map((animal) => (
      <option value={animal.id}>
        {animal.nomAnimal}
      </option>
    ));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const consultationDesc = e.target.desc.value;
    const motifConsultation = e.target.motif.value;
    let clinique = false;
    if (e.target.vClinique.value === 'true') {
      clinique = true;
    }
    let urgente = false;
    if (e.target.vUrgente.value === 'true') {
      urgente = true;
    }
    const animal = `https://127.0.0.1:8000/api/animals/${e.target.animal.value}`;
    const traitement = null;
    const veterinaire = 'https://127.0.0.1:8000/api/veterinaires/1';
    let start = new Date(e.target.start.value).setHours(parseInt(e.target.end.value, 10), 0, 0);
    start = moment(start).format('YYYY-MM-DD HH:mm:ss');
    let end = new Date(e.target.start.value).setHours(parseInt(e.target.end.value, 10) + 2, 0, 0);
    end = moment(end).format('YYYY-MM-DD HH:mm:ss');
    if (consult === undefined) {
      fetch('https://127.0.0.1:8000/api/consultations', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          consultationDesc,
          motifConsultation,
          clinique,
          urgente,
          animal,
          traitement,
          veterinaire,
          start,
          end,
          allday: false,
        }),
      })
        .then(() => navigate('/client'));
    } else {
      fetch(`https://127.0.0.1:8000/api/consultations/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
        credentials: 'include',
        body: JSON.stringify({
          consultationDesc,
          motifConsultation,
          clinique,
          urgente,
          animal,
          traitement,
          veterinaire,
          clinique,
          start,
          end,
          allday : false,
        }),
      })
        .then(() => navigate('/client'));
    }
  };

  return (
    <Form method="get" className="FormulaireCorp" onSubmit={handleSubmit}>
      <Row>
        <Form.Group as={Col} className="FormulaireChampAnimal">

          <Form.Label>Date</Form.Label>
          <Form.Control name="start" required type="date" />
        </Form.Group>

        <Form.Group as={Col} className="FormulaireChampAnimal">
          <Form.Label>Un rendez-vous dure 2H - Choississez une plage horaire</Form.Label>
          <Form.Select required name="end" aria-label="Heure du RDV">
            {listItems}
          </Form.Select>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} className="FormulaireChampAnimal">
          <Form.Label>Motif</Form.Label>
          <Form.Control required name="motif" type="text" placeholder="Motif" defaultValue={consult?.motifConsultation ?? ''}/>
        </Form.Group>
        <Form.Group as={Col} className="FormulaireChampAnimal">

          <Form.Label>Animal</Form.Label>

          <Form.Select name="animal" aria-label="Nom de l'animal">
            {res}
          </Form.Select>
        </Form.Group>

        <Form.Group className="FormulaireChamp">
          <Form.Label>Description</Form.Label>
          <Form.Control name="desc" required type="text" placeholder="Description" defaultValue={consult?.consultationDesc ?? ''}/>
        </Form.Group>

      </Row>
      <Row>
        <Form.Group as={Col} className="FormulaireChampAnimal">
          <Form.Label>En clinique ? </Form.Label>
          <Form.Select name="vClinique" defaultValue="Oui">
            <option value>Oui</option>
            <option value={false}>Non</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} className="FormulaireChampAnimal urgente">
          <Form.Label>Urgence ? </Form.Label>
          <Form.Select name="vUrgente" defaultValue="Non">
            <option value>Oui</option>
            <option value={false}>Non</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button className="FormulaireBouton" variant="primary" type="submit">
        Envoyer
      </Button>
    </Form>
  );
}

export default FormConsultation;
