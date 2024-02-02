import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EnteteTableau(props) {
  // eslint-disable-next-line react/prop-types
  const { champs, onSearchTerm } = props;
  // eslint-disable-next-line react/prop-types
  const lstChamps = champs.map((element) => <th>{element}</th>);
  return (
    <thead className="tete">
      <tr className="tete_nav">
        {lstChamps}
        <th>
          <div className="d-flex">
            <input
              onChange={(e) => onSearchTerm(e.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="nom"
            />
            <a href="/create/FormClient"> <Button variant="outline-light">Ajouter</Button></a>
          </div>
        </th>
      </tr>
    </thead>
  );
}

export default EnteteTableau;
