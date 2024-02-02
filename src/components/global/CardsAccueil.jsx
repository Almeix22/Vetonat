import Card from 'react-bootstrap/Card';
import React from 'react';
import { CardGroup } from 'react-bootstrap';

function CardsAccueil() {
  return (
    <>
      <div className="TitreAccueil">Prendre un rendez vous n'a jamais été aussi simple ! </div>
      <CardGroup className="cardGroupeAccueil">
        <Card className="cardAccueil">
            <Card.Header className="cardAccueilHeader">Connectez-vous à votre compte client</Card.Header>
            <Card.Text className="cardAccueilText">
              Accédez à votre espace personnel en vous connectant sur votre compte client afin de retrouver toutes les informations vous conçernant.
            </Card.Text>

        </Card>
        <Card className="cardAccueil">
            <Card.Header className="cardAccueilHeader">
              Choisissez un créneau
            </Card.Header>
            <Card.Text className="cardAccueilText">
              Accédez au calendrier des vétérinaires en temps réel et choisissez la date et l’heure qui vous conviennent. Remplissez ensuite les informations utiles et nécessaires à la consultation
            </Card.Text>

        </Card>
        <Card className="cardAccueil">
            <Card.Header className="cardAccueilHeader">
              Votre rendez-vous est confirmé !
            </Card.Header>
            <Card.Text className="cardAccueilText">
              Le vétérinaire est informé et vous n’avez plus qu’à vous rendre chez votre vétérinaire.
            </Card.Text>
        </Card>
      </CardGroup>
    </>
  );
}

export default CardsAccueil;
