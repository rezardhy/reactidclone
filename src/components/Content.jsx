import React, { Component } from 'react';
import './Content.css'
import Card from './card/CardEdit';
import Shirt from '../kaos.png'
import { Container, Row, Col, Button} from 'react-bootstrap';


class Content extends Component {
    state = {  } 
    render() { 
        return (

            <div className='wrap'>

                <div className='content1'> 
                    <Container>
                    <Row>
                        <Col sm={7}>
                           <img src={Shirt} alt="" />
                        </Col>
                        <Col sm={5}>
                           
                                <p className='title'>Kabar Gembira</p>
                                <h1>Merchandise Resmi<br />ReactJS Indonesia</h1>
                                <p className='value'>
                                Merchandise resmi ReactJS Indonesia kini tersedia berkat kerjasama oleh Rumah Komunitas. Klik link 
                                di bawah untuk mendapatkan T-shirt dan jaket ReactJS Indonesia.
                                </p>
                                <Button variant="light" className='btn'>Dapatkan Segera 	&#8594;</Button>

                        </Col>
                    </Row>
                   
                    </Container>
                </div>


                <div className='content2'>
                    <p className='title'>INGIN BELAJAR REACT</p>
                    <h1>Materi Pembelajaran</h1>
                    <p className='value'>
                        Beberapa konsep React memang terlihat janggal, tapi diluar itu React sangat mudah untuk dipelajari dan dipahami, 
                        baik mereka yang sudah mahir dalam JavaScript modern ataupun yang baru saja memulai. Cobalah memulai dari salah satu materi di bawah.
                    </p>
                    <Card/>
                </div>

                <div className='content3'>
                    <p>© 2020 ReactJS ID.</p>
                    <p>Kode sumber situs ini tersedia di GitHub. Gambar latar disediakan oleh Transparent Textures.</p>
                   
                </div>

                
               
            </div>

        );
    }
}
 
export default Content;
