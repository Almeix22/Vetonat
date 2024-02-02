import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Card } from 'react-bootstrap';

function Contact() {
  const [data, setData] = useState([]);
  const [dataVeto, setDataVeto] = useState([]);
  useEffect(() => {
    fetch('https://127.0.0.1:8000/api/cliniques/1', { credentials: 'include' })
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
      );
  }, []);
  useEffect(() => {
    fetch('https://127.0.0.1:8000/api/veterinaire', { credentials: 'include' })
      .then((res) => res.json())
      .then(
        (result) => {
          setDataVeto(result['hydra:member']);
        },
      );
  }, []);
  return (
    <>
      <Card className="contacter">
          <Card.Header className="accordeonHeader">Contacter la clinique</Card.Header>
          <Card.Body>
            {data.telClinique}
          </Card.Body>
      </Card>
      <Card className="contacter">
        <Card.Header className="accordeonHeader">Contacter les vétérinaires</Card.Header>
        <Accordion className="accordeon" defaultActiveKey="0">
          {dataVeto.map((veto, index) => (
            <div key={veto.personne.id}>
              <Accordion.Item className="accordeonVeto" eventKey={index}>
                <Accordion.Header >{veto.personne.nomPers}</Accordion.Header>
                <Accordion.Body>
                  {veto.personne.telPers}
                </Accordion.Body>
              </Accordion.Item>
            </div>
          ))}
        </Accordion>
          <Card.Footer>En cas de consultation d’urgence un jour où la clinique est fermée merci de contacter directement le vétérinaire</Card.Footer>
      </Card>

    </>
  );
}
export default Contact;
