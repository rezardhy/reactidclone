
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';


const TestingAxios=(url="https://swapi.dev/api/planets")=>{


  const service = ()=>{
    axios.get(url)
        .then(res => {
          setValue(res.data.results);
          setValueNext(res.data.next);
          setValuePrev(res.data.previous);
        }).catch(e=>{
        })
  
  }

    const [valueNext, setValueNext] = useState('');
    const [valuePrev, setValuePrev] = useState('');
    const [value, setValue] = useState([{}]);


    useEffect (()=>{
        service();
        
    },[url])


    
    return (
      <div className='content'> 
        <Container>
        <Row>
            <Col sm={3}>
              <Button className="btn" onClick={()=>{
                  url=valuePrev;
                  service()

              }}>Prev</Button>
            </Col>
            <Col sm={6}>
              
            <ol>{ value.map((item,i) => <li key={i} className="list">{item.name}</li>)}</ol>
                  
                
            </Col>
            <Col sm={3}>
            <Button className="btn" onClick={()=>{
                url=valueNext;
                service()

            }}>Next</Button>
            </Col>
        </Row>
      
        </Container>
    </div>
    );


}


export default TestingAxios;