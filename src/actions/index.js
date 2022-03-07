import TestingAxios from "../service/testing"

export const planets = (planet)=>{
    return{
        type:'PLANETS',
        payload:planet
    }
}


export const nextPage = (url)=>{
    return{
        type:'NEXT',
        payload:TestingAxios(url)
    }
}

export const previousPage = (url)=>{
    return{
        type:'PREVIOUS',
        payload:TestingAxios(url)
    }
}