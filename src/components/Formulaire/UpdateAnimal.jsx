import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormAnimal from './formAnimal';

function UpdateAnimal() {
  const [animalData, setAnimalData] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://127.0.0.1:8000/api/animals/${id}`, { credentials: 'include' })
      .then((res) => res.json())
      .then(
        (result) => {
            setAnimalData(result);
        },
      );
  }, []);
  return (
    <FormAnimal animal={animalData} />
  );
}

export default UpdateAnimal;
