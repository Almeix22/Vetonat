import React, { useEffect, useState } from 'react';

function CorpTableau(props) {
  // eslint-disable-next-line react/prop-types
  let { search } = props;
  const [clients, setData] = useState([]);
  useEffect(() => {
    fetch('https://127.0.0.1:8000/api/client', { credentials: 'include' })
      .then((result) => result.json())
      .then(
        (result) => {
          setData(result['hydra:member']);
        },
      );
  }, []);

  if (search === undefined) {
    search = '';
  }

  return (
    <tbody className="corp">
      {clients.filter((client) => client.personne.nomPers.includes(search)).map((client) => (
        <tr className="contact">
          <td className="nomPers">{ client.personne.nomPers }</td>
          <td className="pnomPers">{ client.personne.pnomPers }</td>
          <td className="villePers">{ client.personne.villePers }</td>
          <td className="CPPers">{ client.personne.CPPers }</td>
          <td className="telPers">{ client.personne.telPers }</td>
          <td className="boutonAnimauxClient">
            <a href={`/animauxClient/${client.id}`}>
              <button type="button" className="btn btn-light boutonClientAnimal">
                Animaux
              </button>
            </a>
            <a href={`/FormDeleteClient/${client.id}`}>
              <button type="button" className="btn btn-light boutonClientAnimal">
                <span className="material-symbols-outlined iconClientAnimal">delete</span>
              </button>
            </a>
            <a href={`/lstClients/${client.id}`}>
            <button type="button" className="btn btn-light boutonClientAnimal">
              <span className="material-symbols-outlined iconClientAnimal">edit</span>
            </button>
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default CorpTableau;
