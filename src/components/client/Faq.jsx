import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Faq() {
  return (
    <div className="faq">
      <h2 className="quest">Questions fréquentes</h2>
      <Accordion className="accordeonVeto" ActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Combien coûte une consultation d'urgence ?</Accordion.Header>
          <Accordion.Body>
            Une consultation coûte en moyenne 35 euros.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Quelle sont les horaires d’ouverture de la clinique ?</Accordion.Header>
          <Accordion.Body>
            La clinique est ouverte de 9h à 17h.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header> Faites-vous des déplacements ?</Accordion.Header>
          <Accordion.Body>
            20 kilomètres au maximum autour de Reims.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Faq;
