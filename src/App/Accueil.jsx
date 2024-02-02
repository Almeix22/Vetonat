import React from 'react';

function Accueil() {
  return (
    <>
      <div className="message">
        <img alt="" className="cat" src="public/img/acceuil/chat_acceuil.png" />
        <a href="#rdv">
          <div className="légende">
            Prenez
            <span> rendez-vous en ligne</span>
            chez votre vétérinaire
          </div>
        </a>

      </div>
      <footer>
        <div className="title_foot">
          <h2 className="message2">
            Comment prendre rendez-vous chez votre vétérinaire en
            ligne
          </h2>
        </div>
        <div className="lst_inf">
          <div className="info">
            <h3>Connectez-vous à votre compte client</h3>
            <p>
              Accédez à votre espace personnel en vous
              connectant sur votre compte client afin de retrouver toutes les
              informations vous conçernant.
            </p>
          </div>

          <div className="info">
            <h3>Choisissez un créneau</h3>
            <p>
              Accédez au calendrier des vétérinaires
              en temps réel et choisissez la date et l’heure qui vous
              conviennent. Remplissez ensuite
              les informations utiles et nécessaires à la consultation
            </p>
          </div>

          <div className="info">
            <h3>Votre rendez-vous est confirmé !</h3>
            <p>
              Le vétérinaire est informé et vous n’avez
              plus qu’à vous rendre chez votre vétérinaire.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Accueil;
