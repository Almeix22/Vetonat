// eslint-disable-next-line import/extensions
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormConsultation from './FormConsultation.jsx';
import Header from '../../components/global/Header.jsx';


function formConsultationUpdate() {
  const [consult, setConsult] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://127.0.0.1:8000/api/consultations/${id}`, { credentials: 'include' })
      .then((res) => res.json())
      .then(
        (result) => {
          setConsult(result);
        },
      );
  }, []);
  return (
    <>
      <Header />
      <FormConsultation consult={consult} />
    </>
  );
}

export default formConsultationUpdate;
