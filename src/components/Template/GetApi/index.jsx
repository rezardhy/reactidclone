import TestingAxios from "../../../service/testing";
import './index.css'
import { Container, Row, Col, Button} from 'react-bootstrap';
import ListData from "../../Molecule/List";

function GetApi() {
    //console.log(TestingAxios());
    
    //const { value, valueNext,valuePrev} = TestingAxios(); 
    //console.log(valueNext)
    return(
       
        TestingAxios()
        
    )
}

export default GetApi;