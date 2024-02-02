import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { logoutUrl } from '../../services/api/vetonat';

function NavbarClient(props) {
  const { currentPage } = props;

  return (
    <Navbar className="color-nav-client" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/client">Client</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link active={currentPage === 'rdv'} href="/consultationclient">Mes Rendez-vous</Nav.Link>
            <Nav.Link active={currentPage === 'contact'} href="/contact">Contact</Nav.Link>
            <Nav.Link active={currentPage === 'faq'} href="/faq">FAQ</Nav.Link>
            <Nav.Link active={currentPage === 'animaux'} href="/animaux">Animaux</Nav.Link>
            <Nav.Link href={logoutUrl()}>Déconnexion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavbarClient.propTypes = {
  currentPage: PropTypes.string,
};

NavbarClient.defaultProps = {
  currentPage: 'rdv',
};

export default NavbarClient;
