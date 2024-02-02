import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Card } from 'react-bootstrap';

function Error404() {
  return (
    <Card className="Card404">
      <Card.Img className="img404" variant="top" src="../../../public/img/general/error404.jpg" />
      <Card.Body>
        <Card.Title>Oups... Mauvais chemin</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Error404;
