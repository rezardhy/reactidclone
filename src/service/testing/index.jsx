import axios from 'axios';
import { useState, useEffect } from 'react';
import{planets, nextPage, previousPage, page} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';

const TestingAxios=(url="https://swapi.dev/api/planets" )=>{

  const dispatch = useDispatch(); 
  const service = ()=>{
    axios.get(url)
        .then(res => {
          // setValue(res.data.results);
          // setValueNext(res.data.next);
          // setValuePrev(res.data.previous);

          dispatch(page(url));
          dispatch(nextPage(res.data.next));
          dispatch(previousPage(res.data.previous));
          dispatch(planets(res.data.results));//input data ke redux
        }).catch(e=>{
        })
  
  }

    // const [valueNext, setValueNext] = useState('');
    // const [valuePrev, setValuePrev] = useState('');
    // const [value, setValue] = useState([{}]);


    useEffect (()=>{
        service();
        
    },[url])


    //service();


    
   // return [value, valueNext, valuePrev];


}


export default TestingAxios;


// return (
//   <div className='content'> 
//     <Container>
//     <Row>
//         <Col sm={3}>
//           <Button className="btn" onClick={()=>{
//               url=valuePrev;
//               service()

//           }}>Prev</Button>
//         </Col>
//         <Col sm={6}>
          
//         <ol>{ value.map((item,i) => <li key={i} className="list">{item.name}</li>)}</ol>
              
            
//         </Col>
//         <Col sm={3}>
//         <Button className="btn" onClick={()=>{
//             url=valueNext;
//             service()

//         }}>Next</Button>

//         </Col>
//     </Row>
  
//     </Container>
// </div>
// );