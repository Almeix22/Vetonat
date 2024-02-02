import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function AnimalUser() {
  const [data, setData] = useState([]);
  let [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    fetch('https://127.0.0.1:8000/api/me/animals', { credentials: 'include' })
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result['hydra:member']);
        },
      );
  }, []);
  let res = '';
  if (data != null) {
    res = data.filter((animal) => animal.nomAnimal.includes(searchTerm)).map((animal) => (
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
        {/* eslint-disable-next-line react/button-has-type,react/no-unescaped-entities */}
        <td className="boutonAnimauxClient">
          {/* eslint-disable-next-line react/no-unescaped-entities,react/button-has-type */}
          <button type="button" className="btn btn-light boutonClientAnimal">
            <a href={`/animaux/detail/${animal.id}`}> Plus d'informations</a>
          </button>
          <button type="button" className="btn btn-light boutonClientAnimal">
            <a href={`/FormDeleteAnimal/${animal.id}`}>
              <span className="material-symbols-outlined iconClientAnimal">delete</span>
            </a>
          </button>
          <button type="button" className="btn btn-light boutonClientAnimal">
            <a href={`/animauxUpdate/${animal.id}`}>
            <span className="material-symbols-outlined iconClientAnimal">edit</span>
            </a>
          </button>
        </td>
      </tr>
    ));
  } else {
    res = "Vous n'avez pas encore saisi d'animal";
  }

  function onSearchTerm(val) {
    setSearchTerm(val);
  }

  if (searchTerm === undefined) {
    searchTerm = '';
  }
  return (
    <Table striped className="Table">
      <thead className="tete">
        <tr className="tete_nav">
          <th scope="col">Nom</th>
          <th scope="col">Espèce</th>
          <th scope="col">Age</th>
          <th scope="col">Poids</th>
          <th>
            <Form className="d-flex">
              <input
                onChange={(e) => onSearchTerm(e.target.value)}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <a href={'/create/FormAnimal'}>
              <Button variant="outline-light">Ajouter</Button>
              </a>
            </Form>
          </th>
        </tr>
      </thead>
      <tbody className="corp">
        { res }
      </tbody>
    </Table>
  );
}
export default AnimalUser;
