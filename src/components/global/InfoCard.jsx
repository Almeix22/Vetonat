import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { ListGroup } from 'react-bootstrap';

function InfoCard(props) {
  const { listGroup, header } = props;
  const listItems = listGroup.map((info) => <ListGroup.Item>{info}</ListGroup.Item>);
  return (
    <Col className="cardInfo">
      <Card>
        <Card.Header className="cardInfoHeader">
          {header}
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {listItems}
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default InfoCard;
