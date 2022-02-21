import React, { Component } from 'react';
import { Card, Col, Row, Button} from 'react-bootstrap';
import logo from '../../logo.svg';
import './Card.css'

const Kelas = [
    {
        nama:"Kelas React Pemula",
        isi: " This is a longer card with supporting text below as a naturalead-in to additional content. This content is a little bit longer."
    },
    {
        nama:"Kelas React Dasar",
        isi: " This is a longer card with supporting text below as a naturalead-in to additional content. This content is a little bit longer."
    },
    {
        nama:"Kelas React Fundamental ",
        isi: " This is a longer card with supporting text below as a naturalead-in to additional content. This content is a little bit longer."
    }
]


class CardEdit extends Component {
    state = {  } 
    render() { 
        return (

            <Row xs={1} md={3} className="g-4">
                {Kelas.map((item, idx) => (
                    <Col key={idx}>
                       <Card >
                                <Card.Img variant="top" src={logo} />
                                <Card.Body>
                                    <Card.Title>{item.nama}</Card.Title>
                                    <Card.Text>
                                    {item.isi}
                                    </Card.Text>
                                    <Button className='btn1' variant="primary">Pelajari &#8594;</Button>
                                </Card.Body>
                            </Card>
                    </Col>
                ))}
            </Row>
            
                

            
            
        );
    }
}
 
export default CardEdit;
