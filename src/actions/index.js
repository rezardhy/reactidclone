import axios from 'axios';
import { useDispatch } from 'react-redux';


export function getData(url){
    return (
        axios.get(url)
        .then(res => {
        const dispatch = useDispatch()
          dispatch(page(url));
          dispatch(nextPage(res.data.next));
          dispatch(previousPage(res.data.previous));
          dispatch(planets(res.data.results));
        }).catch(e=>{
        })
    )
}

export const planets = (planet)=>{
    return{
        type:'PLANETS',
        payload:planet
    }
}


export const nextPage = (url)=>{
    return{
        type:'NEXT',
        payload:url,

    }
}

export const previousPage = (url)=>{
    return{
        type:'PREVIOUS',
        payload:url
    }
}

export const page = (url)=>{
    return{
        type:'NOW',
        payload:url
    }
}