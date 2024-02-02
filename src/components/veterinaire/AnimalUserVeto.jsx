import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';

function AnimalUserVeto() {
  const [client, setClient] = useState([]);

  const { id } = useParams();
  fetch(`https://127.0.0.1:8000/api/clients/${id}`, { credentials: 'include' })
    .then((res) => res.json())
    .then(
      (result) => {
        setClient(result);
      },
    );
  let res = '';

  const animalFetch = [];
  let cltanimal = client.animal;
  console.log(cltanimal);
  if (client != null) {
    for (const animal in cltanimal) {
      fetch(`https://127.0.0.1:8000/animals/${animal}`, { credentials: 'include' })
        .then((res) => res.json())
        .then(
          (result) => {
            animalFetch.push(result);
          },
        );
    }
    console.log(animalFetch);
    res = ((animalFetch).map((animal) => (
      <tr className="animal" key={animal.id}>
        <td className="nomAnimal">
          { animal.nomAnimal }
        </td>
        <td className="Espece">{ animal.EspeceAnimal }</td>
        <td className="Age">
          { animal.ageAnimal }
          {' '}
          kg
        </td>
        <td className="Espece">
          { animal.poidsAnimal }
          {' '}
          Kilos
          {' '}
        </td>
        <td className="boutonAnimauxClient">
          <button type="button" className="btn btn-light boutonClientAnimal">
            <a href={`/animaux/detail/${animal.id}`}> Plus d'informations</a>
          </button>
          <button type="button" className="btn btn-light boutonClientAnimal">
            <a href={`/FormDeleteAnimal/${animal.id}`}>
              <span className="material-symbols-outlined iconClientAnimal">delete</span>
            </a>
          </button>
          <button type="button" className="btn btn-light boutonClientAnimal">
            <a href={`/animaux/${animal.id}`}>
              <span className="material-symbols-outlined iconClientAnimal">edit</span>
            </a>
          </button>
        </td>
      </tr>
    )));
  } else {
    res = "Vous n'avez pas encore saisi d'animal";
  }

  return (
    <Table striped className="Table">
      <thead className="tete">
        <tr className="tete_nav">
          <th scope="col">Nom</th>
          <th scope="col">Espèce</th>
          <th scope="col">Age</th>
          <th scope="col">Poids</th>
        </tr>
      </thead>
      <tbody className="corp">
        { res }
      </tbody>
    </Table>
  );
}

export default AnimalUserVeto;
