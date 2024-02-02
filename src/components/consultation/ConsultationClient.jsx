import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import dateFormat from 'dateformat';
import Button from 'react-bootstrap/Button';
import { format } from 'date-fns';
import NavbarClient from '../client/NavbarClient.jsx';

function ConsultationClient() {
  const [consultation, setData] = useState([]);
  const [animalme, setDataani] = useState([]);
  useEffect(() => {
    fetch('https://127.0.0.1:8000/api/consultation', { credentials: 'include' })
      .then((result) => result.json())
      .then(
        (result) => {
          setData(result['hydra:member']);
        },
      );
    fetch('https://127.0.0.1:8000/api/me/animals', { credentials: 'include' })
      .then((result) => result.json())
      .then(
        (result) => {
          setDataani(result['hydra:member']);
        },
      );
  }, []);

  let res = '';
  const consultationme = [];
  const tabidanimal = [];
  for (const j in animalme) {
    tabidanimal.push(animalme[j].id);
  }
  console.log(tabidanimal);
  console.log(consultation);
  for (const i in consultation) {
    if (((tabidanimal.indexOf(consultation[i].animal.id)) !== -1) && (dateFormat(Date(), 'dd/mm/yyyy') === (dateFormat(consultation[i].start, 'dd/mm/yyyy')))) {
      consultationme.push(consultation[i]);
    }
  }
  res = consultationme.map((consul) => (
    <Card className="consultationCard">
      <Card.Header>
        Animal :
        {' '}
        {consul.animal.nomAnimal}
        {' '}
        | Age :
        {' '}
        {consul.animal.ageAnimal}
        {' '}
        ans
      </Card.Header>
      <Card.Subtitle className="consultation">
        <br />
        <div className="ele">Consultation :</div>
        {consul.motifConsultation}
        <br />
        <div className="ele">Aujourd'hui</div>
        <div className="ele">De</div>
        { dateFormat(consul.start, 'HH:MM:ss') }
        <div className="ele">à</div>
        { dateFormat(consul.end, 'HH:MM:ss') }
      </Card.Subtitle>
      <Card.Text className="motif">
        <div className="ele">Description :</div>
        {consul.consultationDesc}
      </Card.Text>
      <Card.Footer>
        <div className="boutonAllConsultation">
          <Button type="button" variant="outline-light" className=" boutonClientAnimal">
            <a href={`/FormDeleteConsultation/${consul.id}`}>
              <span className="material-symbols-outlined icon iconConsultation">delete</span>
            </a>
          </Button>
          <Button type="button" variant="outline-light" className=" boutonClientAnimal">
            <a href={`/FormConsultationUpdate/${consul.id}`}>
              <span className="material-symbols-outlined icon iconConsultation">edit</span>
            </a>
          </Button>
        </div>
      </Card.Footer>

    </Card>
  ));

  return (
    <Card>
      <Card.Header>
        Nous sommes le
        {' '}
        {format(new Date(), 'dd/MM/yyyy').toLocaleString('fr')}
        <br />
        Prendre un rendez-vous :
        <Button type="button" className="btn btn-light boutonClientAnimal">
          <a href="/FormConsultation">
            <span className="material-symbols-outlined icon iconClientAnimal">add_circle</span>
          </a>
        </Button>
      </Card.Header>
      {res}
    </Card>

  );
}

export default ConsultationClient;
