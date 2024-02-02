import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import { logoutUrl } from '../../services/api/vetonat';

function NavbarVeterinaire(props) {
  const { currentPage } = props;

  return (
    <Navbar className="color-nav-veto" collapseOnSelect expand="lg" variant="dark">
      <Container className="test">
        <Navbar.Brand href="/veterinaire">Vétérinaire</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link active={currentPage === 'rdv'} href="/consultationveterinaire">Mes Rendez-vous</Nav.Link>
            <Nav.Link active={currentPage === 'planning'} href="/planningveterinaire">Planning</Nav.Link>
            <Nav.Link active={currentPage === 'clients'} href="/lstClients">Clients</Nav.Link>
            <Nav.Link active={currentPage === 'infos'} href="/infos">Mes informations</Nav.Link>
            <Nav.Link href={logoutUrl()}>Déconnexion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavbarVeterinaire.propTypes = {
  currentPage: PropTypes.string,
};

NavbarVeterinaire.defaultProps = {
  currentPage: '',
};

export default NavbarVeterinaire;
