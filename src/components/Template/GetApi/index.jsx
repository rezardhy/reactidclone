import TestingAxios from "../../../service/testing";
import './index.css'
import {useDispatch, useSelector} from 'react-redux';
import { Container, Row, Col, Button} from 'react-bootstrap';

function GetApi() {

    let value = TestingAxios();

    return (
      <div className='content'> 
        <Container>
        <Row>
            <Col sm={3}>
            
            </Col>
            <Col sm={6}>
              
            <ol>{ value.map((item,i) => <li key={i} className="list">{item.name}</li>)}</ol>
                  
                
            </Col>
            <Col sm={3}>
            

            </Col>
        </Row>
      
        </Container>
    </div>
    );
}

export default GetApi;