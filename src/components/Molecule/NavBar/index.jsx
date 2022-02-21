import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../../../logo.svg';
import './index.css'

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
          <Navbar sticky="top" className='color-nav' variant="dark">
            <Container>
            <Navbar.Brand href="#"><img src={logo} alt="logo" width="100px" height="70px" />.id</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Komunitas</Nav.Link>
              <Nav.Link href="#features">Ajukan Topik</Nav.Link>
              <Nav.Link href="#pricing">FAQ</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
        );
    }
}
 
export default NavBar;