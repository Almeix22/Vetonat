import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';

function AnimalClient() {
  const [client, setClient] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://127.0.0.1:8000/api/clients/${id}`, { credentials: 'include' })
      .then((res) => res.json())
      .then(
        (result) => {
          setClient(result);
        },
      );
  }, []);
  if (client === undefined || client.animal === undefined) {
    return 'Loading';
  }
  let res = '';
  res = client.animal.map((animal) => (
    <tr className="animal" key={animal.id}>
      <td className="nomAnimal">
        {animal.nomAnimal}
      </td>
      <td className="Espece">{animal.EspeceAnimal}</td>
      <td className="Age">
        {animal.ageAnimal}
        {' '}
        kg
      </td>
      <td className="Espece">
        {animal.poidsAnimal}
        {' '}
        Kilos
        {' '}
      </td>
      {/* eslint-disable-next-line react/button-has-type,react/no-unescaped-entities */}
      <td className="boutonAnimauxClient">
        {/* eslint-disable-next-line react/no-unescaped-entities,react/button-has-type */}
        <a href={`/animaux/detail/${animal.id}`}>
        <button type="button" className="btn btn-light boutonClientAnimal">
          Plus d'informations
        </button>
        </a>
        <button type="button" className="btn btn-light boutonClientAnimal">
          <a href={`/FormDeleteAnimal/${animal.id}`}>
            <span className="material-symbols-outlined iconClientAnimal">delete</span>
          </a>
        </button>
        <a href={`/animauxUpdate/${animal.id}`}>
        <button type="button" className="btn btn-light boutonClientAnimal">
            <span className="material-symbols-outlined iconClientAnimal">edit</span>
        </button>
        </a>
      </td>
    </tr>
  ));

  return (
    <Table striped className="Table">
      <thead className="tete">
        <tr className="tete_nav">
          <th scope="col">Nom</th>
          <th scope="col">Espèce</th>
          <th scope="col">Age</th>
          <th scope="col">Poids</th>
          <th />
        </tr>
      </thead>
      <tbody className="corp">
        {res}
      </tbody>
    </Table>
  );
}
export default AnimalClient;
