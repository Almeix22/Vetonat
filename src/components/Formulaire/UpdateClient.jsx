// eslint-disable-next-line import/extensions
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import FormClient from './formClient.jsx';

function updateClient() {
  const [clientData, setClientData] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://127.0.0.1:8000/api/clients/${id}`, { credentials: 'include' })
      .then((res) => res.json())
      .then(
        (result) => {
          setClientData(result);
        },
      );
  }, []);
  return (
  // eslint-disable-next-line react/react-in-jsx-scope
    <FormClient client={clientData} />
  );
}

export default updateClient;
