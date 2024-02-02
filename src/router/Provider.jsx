import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './route/Home';
import FaqPage from './route/FaqPage';
import TableauLstClient from './route/TableauLstClient';
import ContactPage from './route/ContactPage';
import Root from './route/Root';
import ConsultationClient from './route/ConsultationClientPage';
import ConsultationVeto from './route/ConsultationVetoPage';
import InfosVeto from './route/InfosVeto';

import AnimalDetailPage from './route/AnimalDetail.jsx';

import AnimalUserPage from './route/AnimalUserPage';
import InfoRDV from './route/InfoRDV';
import PlanningClient from './route/PlanningClientPage';
import PlanningVeto from './route/PlanningVetoPage';
import FormAnimal from './route/FormAnimal.jsx';
import PageError404 from './route/PageError404';
import FormClient from './route/FormClient';
import FormDeleteClient from './route/FormDeleteClient';
import FormDeleteAnimal from './route/FormDeleteAnimal.jsx';
import FormUpdateClient from './route/FormUpdateClient.jsx';
import FormUpdateAnimal from './route/FormUpdateAnimal.jsx';
import FormConsultation from './route/FormConsultation.jsx';
import Accueil from './route/Accueil.jsx';
import AnimalClientIdPage from './route/AnimalClientIdPage.jsx';
import FormDeleteConsultation from "./route/FormDeleteConsultation.jsx";
import PageAnimalUserVeto from "./route/PageAnimalUserVeto.jsx";
import FormConsultationUpdate from "../components/Formulaire/FormConsultationUpdate.jsx";

function Provider() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Accueil />,
        },
        {
          path: '/faq',
          element: <FaqPage />,
        },
        {
          path: '/lstClients',
          element: <TableauLstClient />,
        },
        {
          path: '/contact',
          element: <ContactPage />,
        },
        {
          path: '/infos',
          element: <InfosVeto />,
        },
        {
          path: '/consultationclient',
          element: <ConsultationClient />,
        },
        {
          path: '/consultationveterinaire',
          element: <ConsultationVeto />,
        },
        {
          path: '/planningclient',
          element: <PlanningClient />,
        },
        {
          path: '/planningveterinaire',
          element: <PlanningVeto />,
        },
        {
          path: '/animaux',
          element: <AnimalUserPage />,
        },
        {
          path: '/animaux/:id',
          element: <PageAnimalUserVeto />,
        },
        {
          path: '/animauxClient/:id',
          element: <AnimalClientIdPage />,
        },
        {
          path: '/InfoRDV/:id',
          element: <InfoRDV />,
        },
        {
          path: '/animaux/detail/:id',
          element: <AnimalDetailPage />,
        },
        {
          path: '/PageError404',
          element: <PageError404 />,
        },
        {
          path: '/create/FormClient',
          element: <FormClient />,
        },
        {
          path: '/lstClients/:id',
          element: <FormUpdateClient />,
        },
        {
          path: '/veterinaire',
          element: <ConsultationVeto />,
        },
        {
          path: '/client',
          element: <ConsultationClient />,
        },
        {
          path: '/FormDeleteClient',
          element: <FormDeleteClient />,
        },
        {
          path: '/create/FormAnimal',
          element: <FormAnimal />,
        },
        {
          path: '/animauxUpdate/:id',
          element: <FormUpdateAnimal />,
        },
        {
          path: '/FormConsultationUpdate/:id',
          element: <FormConsultationUpdate />,
        },
        {
          path: '/FormDeleteAnimal',
          element: <FormDeleteAnimal />,
        },
        {
          path: '/FormDeleteClient/:id',
          element: <FormDeleteClient />,
        },
        {
          path: '/FormDeleteAnimal/:id',
          element: <FormDeleteAnimal />,
        },
        {
          path: '/FormConsultation',
          element: <FormConsultation />,
        },
        {
          path: '/FormDeleteConsultation/:id',
          element: <FormDeleteConsultation />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Provider;
