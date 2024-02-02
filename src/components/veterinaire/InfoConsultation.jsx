import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Form, ListGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import InfoCard from '../global/InfoCard';

function InfoConsultation() {
  const [data, setData] = useState();
  const [clinique, setDataclinique] = useState();
  const [moi, setDatamoi] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://127.0.0.1:8000/api/consultations/${id}`, { credentials: 'include' })
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
      ),
    fetch('https://127.0.0.1:8000/api/cliniques/1', { credentials: 'include' })
      .then((res) => res.json())
      .then(
        (result) => {
          setDataclinique(result);
        },
      ),
    fetch('https://127.0.0.1:8000/api/clients/1}', { credentials: 'include' })
      .then((res) => res.json())
      .then(
        (result) => {
          setDatamoi(result);
        },
      );
  }, []);
  if (data === undefined || clinique === undefined || moi === undefined) {
    return 'Loading ...';
  }

  return (
    <div className="mainCardInfo">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <InfoCard listGroup={[`Nom : ${data.animal.nomAnimal ?? ''}  `, `Race : ${data.animal.EspeceAnimal ?? ''}`, `Poids : ${data.animal.poidsAnimal ?? ''} kg`]} header="Animal" />
        </Col>
        <Col>
          <Card className="cardInfo">
            <Card.Header className="cardInfoHeader">
              Lieux
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {' '}
                  Ville :
                  {clinique.villeClinique ?? ''}
                </ListGroup.Item>
                <ListGroup.Item>
                  {' '}
                  Adresse :
                  {clinique.adrClinique ?? ''}
                </ListGroup.Item>
                <ListGroup.Item>
                  {' '}
                  Code postal :
                  {clinique.CPClinique ?? ''}
                </ListGroup.Item>
              </ListGroup>
              <Form action="http://maps.google.com/maps" target="_blank" method="get">

                <div className="ele"> Entrez votre adresse de départ :</div>

                <input name="saddr" type="text" />
                <input name="daddr" type="hidden" value="58 Rue Gambetta, 51100 Reims" />
                <input type="submit" className="btn btn-secondary boutonClientAnimal" value="Trajet" />

              </Form>

            </Card.Body>

          </Card>
        </Col>
        <Col>
          <InfoCard listGroup={[`Nom : ${moi.personne.nomPers ?? ''}`, `Prénom : ${moi.personne.pnomPers ?? ''}`, `Téléphone : ${moi.personne.telPers}`, `Ville : ${moi.personne.villePers}`, `Adresse : ${moi.personne.adrPers}`, `Code Postal : ${moi.personne.CPPers}`]} header="Propriétaire" />
        </Col>
      </Row>
    </div>
  );
}

export default InfoConsultation;
