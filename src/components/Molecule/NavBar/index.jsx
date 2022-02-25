import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../../../logo.svg';
import './index.css'
import { useState, useEffect } from 'react';

function NavBar(props){

  const[valueLeft,setValueLeft] = useState([{}]);
  const[valueRight,setValueRight] = useState([{}]);

  useEffect(()=>{
    setValueLeft(props.navLeft);
    setValueRight(props.navRight);

  },[])

  return (
    <Navbar sticky="top" className='color-nav' variant="dark">
      <Container>
      <Navbar.Brand href="/"><img src={logo} alt="logo" width="100px" height="70px" />.id</Navbar.Brand>
      <Nav className="me-auto">
        {valueLeft.map((item,i) =>(
            <Nav.Link  key={i} href={item.link}>{item.title} </Nav.Link>
          ))}
      
      </Nav>
      <Nav className="justify-content-end">
        {valueRight.map((item,i) =>(
          <Nav.Link  key={i} href={item.link}>{item.title} </Nav.Link>
        ))}
      
      </Nav>
      </Container>
    </Navbar>
  );
}
 
export default NavBar;
//<Nav.Link key={i} href={item.link}>{item.title}</Nav.Link>
//             <Link key={i} to={item.link}>{item.title}</Link>
