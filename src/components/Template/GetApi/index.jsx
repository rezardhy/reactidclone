import TestingAxios from "../../../service/testing";
import './index.css'
import {useDispatch, useSelector} from 'react-redux';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { planets, nextPage, previousPage } from "../../../actions";
import { useState,useEffect } from "react";

function GetApi() {

    let [value, valueNext, valuePrev] = TestingAxios();


    let planets = useSelector(state=>state.data);
    let dispatch = useDispatch()
    //console.log("planets: :",planets)

  
    // console.log("value next", valueNext);
    // console.log("value prev", valuePrev);
    //console.log("value: ", value);

   

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
                    <Button className="btn" onClick={console.log("tes")}>Next</Button>

                </Col>
            </Row>
      
        </Container>
    </div>
    );
}



export default GetApi;