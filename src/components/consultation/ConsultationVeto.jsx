import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { format } from 'date-fns';
import dateFormat from 'dateformat';

function ConsultationVeto() {
  const [consultation, setData] = useState([]);
  const [moi, setDatamoi] = useState([]);
  useEffect(() => {
    fetch('https://127.0.0.1:8000/api/consultation', { credentials: 'include' })
      .then((result) => result.json())
      .then(
        (result) => {
          setData(result['hydra:member']);
        },
      );
    fetch('https://127.0.0.1:8000/api/me', { credentials: 'include' })
      .then((result) => result.json())
      .then(
        (result) => {
          setDatamoi(result);
        },
      );
  }, []);

  let res = '';
  const vetomoi = moi.veterinaire;
  const consuaffiche = [];
  for (const i in consultation) {
    if ((consultation[i].veterinaire === moi.veterinaire) && ( dateFormat(Date(), 'dd/mm/yyyy') === (dateFormat(consultation[i].start, 'dd/mm/yyyy'))) ) {
      consuaffiche.push(consultation[i]);
    }
  }
  res = consuaffiche.map((consul) => (
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
                    <a href="">
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
      </Card.Header>
      {res}
    </Card>
  );
}

export default ConsultationVeto;
