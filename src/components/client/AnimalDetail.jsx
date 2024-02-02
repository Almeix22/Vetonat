import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dateFormat from 'dateformat';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

function AnimalDetail() {
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://127.0.0.1:8000/api/animals/${id}`, { credentials: 'include' })
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
      );
  }, []);
  if (data === undefined) {
    return 'Loading';
  }
  let sterelise = 'Non';
  if (data['Stereliser'] === true) {
    sterelise = "Oui";
  }
  return (
    <>
      <Table className="global Table">
        <thead className="tete_nav">
          <tr>
            <th className="infoAnimal" scope="col">
              Nom :
              <div className="ele">{data.nomAnimal}</div>
            </th>
            <th className="infoAnimal" scope="col">
              Espèce :
              <div className="ele">{ data.EspeceAnimal }</div>
            </th>
            <th className="infoAnimal" scope="col">
              Stérilisé :
              <div className="ele">{sterelise}</div>
            </th>
            <th className="infoAnimal" scope="col">
              Age :
              <div className="ele">{ data.ageAnimal }</div>
            </th>
            <th className="infoAnimal" scope="col">
              Poids :
              <div className="ele">{ data.poidsAnimal }</div>
              {' '}
              Kg
            </th>
            <th className="infoAnimal">
              <button type="button" className="btn btn-light boutonClientAnimal">
                <a href={`/FormDeleteAnimal/${id}`}>
                <span className="material-symbols-outlined iconClientAnimal">delete</span>
                </a>
              </button>
              <button type="button" className="btn btn-light boutonClientAnimal">
                <a href={`/animauxUpdate/${id}`}>
                <span className="material-symbols-outlined iconClientAnimal">edit</span>
                </a>
              </button>
            </th>
          </tr>
        </thead>
      </Table>

      <Card className="infoAnimalCard">
        <Card.Body>
          <Card.Title>Description : </Card.Title>
          <Card.Text>
            { data.descriptionAnimal }
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="infoAnimalCard">
        <Card.Title>
          <div className="ele">Dernière consultation :</div>
        </Card.Title>
        {data && data.consultation.map((consultation) => (
          <Card className="consultationCard">
            <Card.Title>
              <div className="ele">Consultation :</div>
              { consultation.consultationDesc }
            </Card.Title>
            <Card.Subtitle className="consultation">
              <div className="ele">De</div>
                { dateFormat(consultation.start, 'dd/mm/yyyy HH:MM:ss') }
              <div className="ele">à</div>
                { dateFormat(consultation.end, 'dd/mm/yyyy HH:MM:ss') }
            </Card.Subtitle>
            <Card.Text className="motif">
              <div className="ele">Motif :</div>
              { consultation.motifConsultation }
            </Card.Text>
          </Card>
        ))}
      </Card>
    </>
  );
}
export default AnimalDetail;
