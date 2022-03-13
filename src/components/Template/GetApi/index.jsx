import TestingAxios from "../../../service/testing";
import './index.css'
import {useDispatch, useSelector} from 'react-redux';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { connect } from 'react-redux';

import { planets, nextPage, previousPage, page, getData } from "../../../actions";
import { useState, useEffect } from "react";

const GetApi = ()=> {


    TestingAxios();
 
    let dispatch = useDispatch()

   
    let planetList = useSelector(state=>state.data);
    let now = useSelector(state=>state.url);
    let next = useSelector(state=>state.next);
    let prev = useSelector(state=>state.prev);
    //console.log("next: :",next)

    const toNext = ()=>{
        dispatch(page(next))
        dispatch(previousPage(now))
        TestingAxios(next);


    }

    const toPrev = ()=>{
        //console.log(previousPage(valuePrev))
     }

   

    return (
      <div className='content'> 
        <Container>
            <Row>
                <Col sm={3}>
                    <Button className="btn" onClick={()=>toPrev()}>previous</Button>

                </Col>
                <Col sm={6}>
                
                    <ol>{ planetList.map((item,i) => <li key={i} className="list">{item.name}</li>)}</ol>
                    
                    
                </Col>
                <Col sm={3}>
                    <Button className="btn" onClick={()=>toNext()}>Next</Button>

                </Col>
            </Row>
      
        </Container>

    </div>
    );
}



export default GetApi;