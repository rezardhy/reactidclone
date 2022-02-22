import { Card, Col, Row, Button} from 'react-bootstrap';
import logo from '../../../logo.svg';
import './index.css'



function Cards(props){
    return(
        <Row xs={1} md={3} className='g-4'>
                {props.children.map((item, idx) => (
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
export default Cards;
