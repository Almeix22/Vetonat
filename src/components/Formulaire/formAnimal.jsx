import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { getMe } from '../../services/api/vetonat';

function FormAnimal(props) {
  // eslint-disable-next-line react/prop-types
  const { animal } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const nom = e.target.Nom.value;
    const espece = e.target.Espece.value;
    let sterile = false;
    if (e.target.Sterile.value === 'true') {
      sterile = true;
    }
    const age = parseInt(e.target.Age.value, 10);
    const poids = parseFloat(e.target.Poids.value);
    const description = e.target.Description.value;

    if (animal === undefined) {
      fetch('https://127.0.0.1:8000/api/animals', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nomAnimal: nom,
          EspeceAnimal: espece,
          Stereliser: sterile,
          ageAnimal: age,
          poidsAnimal: poids,
          descriptionAnimal: description,
        }),
      })
        .then(() => navigate(-1));
    } else {
      fetch(`https://127.0.0.1:8000/api/animals/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
        credentials: 'include',
        body: JSON.stringify({
          nomAnimal: nom,
          EspeceAnimal: espece,
          Steriliser: sterile,
          ageAnimal: age,
          poidsAnimal: poids,
          descriptionAnimal: description,
        }),
      })
        .then(() => navigate(-1));
    }
  };
  return (
    <Form method="get" className="FormulaireCorp" onSubmit={handleSubmit}>
      <Form.Group className="FormulaireChamp">
        <Form.Label>Nom Animal</Form.Label>
        <Form.Control name="Nom" required placeholder="Nom animal" defaultValue={animal?.nomAnimal ?? ''} />
      </Form.Group>
      <Form.Group className="FormulaireChamp">
        <Form.Label>Espèce</Form.Label>
        <Form.Control name="Espece" required placeholder="Espèce" defaultValue={animal?.EspeceAnimal ?? ''} />
      </Form.Group>
      <Form.Group className="FormulaireChamp">
        <Form.Label>Stérilisé ?</Form.Label>
        <Form.Select name="Sterile" required type="Sterile" defaultValue={animal?.Steriliser ?? true}>
          <option value>Oui</option>
          <option value={false}>Non</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="FormulaireChamp">
        <Form.Label>Age</Form.Label>
        <Form.Control required placeholder="Age" name="Age" defaultValue={animal?.ageAnimal ?? 0} />
      </Form.Group>
      <Form.Group className="FormulaireChamp">
        <Form.Label>Poids</Form.Label>
        <Form.Control required placeholder="Poids" name="Poids" defaultValue={animal?.poidsAnimal ?? 0} />
      </Form.Group>
      <Form.Group controlId="description" className="FormulaireChamp">
        <Form.Label>Description</Form.Label>
        <Form.Control required placeholder="Description" name="Description" defaultValue={animal?.descriptionAnimal ?? ''} />
      </Form.Group>

      <Button className="FormulaireBouton" variant="primary" type="submit">
        Envoyer
      </Button>
    </Form>
  );
}

export default FormAnimal;
