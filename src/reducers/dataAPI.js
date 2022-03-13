import axios from 'axios';
import { useState, useEffect } from 'react';
import{planets, nextPage, previousPage, page} from '../actions';
import {useDispatch, useSelector} from 'react-redux';

const dataAPI = (state = [] , action)=>{
    switch(action.type){
        case 'PLANETS':
            return action.payload;
        default:
            return state;
    }
}

const TestingAxios=(url="https://swapi.dev/api/planets" )=>{

  const dispatch = useDispatch(); 
  const service = ()=>{
    axios.get(url)
        .then(res => {

          dispatch(page(url));
          dispatch(nextPage(res.data.next));
          dispatch(previousPage(res.data.previous));
          dispatch(planets(res.data.results));//input data ke redux
        }).catch(e=>{
        })
  
  }
    useEffect (()=>{
        service();
        
    },[url])

    let planetList = useSelector(state=>state.data);


    return planetList

}


export default dataAPI;