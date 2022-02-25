import React, { Component } from 'react';
import './Content.css'
import Card from '../Molecule/card';
import Shirt from '../../kaos.png'
import Header1 from '../Atom/h1';
import Paragraph from '../Atom/Paragraph';
import Footer from '../Molecule/Footer';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';


function Content(props){
    const [valueCard, setValueCard] = useState([{}]);

    useEffect (()=>{
        setValueCard(props.children)
    },[])


    return (

        <div className='wrap'>

            <div className='content1'> 
                <Container>
                <Row>
                    <Col sm={7}>
                       <img src={Shirt} alt="" className='shirt' />
                    </Col>
                    <Col sm={5}>
                       
                            <Paragraph className='title'>Kabar Gembira</Paragraph>
                            <Header1>Merchandise Resmi<br />ReactJS Indonesia</Header1>
                            <Paragraph className='value'>
                            Merchandise resmi ReactJS Indonesia kini tersedia berkat kerjasama oleh Rumah Komunitas. Klik link 
                            di bawah untuk mendapatkan T-shirt dan jaket ReactJS Indonesia.
                            </Paragraph>
                            <Button variant="light" className='btn'>Dapatkan Segera &#8594;</Button>

                    </Col>
                </Row>
               
                </Container>
            </div>


            <div className='content2'>
                <Paragraph className='title'>INGIN BELAJAR REACT</Paragraph>
                <Header1>Materi Pembelajaran</Header1>
                <Paragraph className='value'>
                    Beberapa konsep React memang terlihat janggal, tapi diluar itu React sangat mudah untuk dipelajari dan dipahami, 
                    baik mereka yang sudah mahir dalam JavaScript modern ataupun yang baru saja memulai. Cobalah memulai dari salah satu materi di bawah.
                </Paragraph>
                <Card>{valueCard}</Card>
               
                
            </div>

            <div className='content3'>
                <Footer />
            </div>

            
           
        </div>

    );
}
 
export default Content;
