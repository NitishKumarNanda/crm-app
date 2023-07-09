
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function AppNavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed='top'>
      <Container>
        <Navbar.Brand href="/">CRM Application</Navbar.Brand>
        <Navbar.Brand id="responsive-navbar-nav">
          <Nav>
            <NavLink to="/login">Logout</NavLink>
          </Nav>
        </Navbar.Brand>
      </Container>
    </Navbar><br/><br/>
    </>
  );
}