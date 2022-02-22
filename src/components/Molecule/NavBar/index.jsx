import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../../../logo.svg';
import './index.css'
import { useState, useEffect } from 'react';

function NavBar(props){

  const[value,setValue] = useState([{}]);

  useEffect(()=>{
    setValue(props.value);
  },[])

  console.log(props.value);
  return (
    <Navbar sticky="top" className='color-nav' variant="dark">
      <Container>
      <Navbar.Brand href="#"><img src={logo} alt="logo" width="100px" height="70px" />.id</Navbar.Brand>
      <Nav className="me-auto">
        {value.map((item,i) =>(
            <Nav.Link key={i} href={item.link}>{item.title}</Nav.Link>

        ))}
      
      </Nav>
      </Container>
    </Navbar>
  );
}
 
export default NavBar;