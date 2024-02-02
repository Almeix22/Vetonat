import React, { useEffect, useState } from 'react';

function Infos() {
  const [dataVeto, setVeto] = useState([]);
  useEffect(() => {
    fetch('https://127.0.0.1:8000/api/me', { credentials: 'include' })
      .then((res) => res.json())
      .then(
        (result) => {
          setVeto(result);
        },
      )
  }, []);
  return (
    <div className="main">
      <div className="info_section">
        <span>Mes informations</span>
        <div className="champ">{dataVeto.pnomPers}</div>
        <div className="champ">{dataVeto.nomPers}</div>
        <div className="champ">{dataVeto.telPers}</div>
        {/* eslint-disable-next-line react/button-has-type */}
        <button className="validation">Valider</button>
      </div>
    </div>
  );
}

export default Infos;
