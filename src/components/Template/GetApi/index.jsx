import TestingAxios from "../../../service/testing";
import './index.css'
import {useDispatch, useSelector} from 'react-redux';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { planets, nextPage, previousPage } from "../../../actions";

function GetApi() {

    let planets = useSelector(state=>state.planets);
    let dispatch = useDispatch()
    console.log("planets: :",planets)
    let [value, valueNext, valuePrev] = TestingAxios();
    // console.log("value next", valueNext);
    // console.log("value prev", valuePrev);
    // console.log("value: ", value);

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
            <Button className="btn" onClick={()=>{dispatch(nextPage(valueNext))}}>Next</Button>

            </Col>
        </Row>
      
        </Container>
    </div>
    );
}

export default GetApi;