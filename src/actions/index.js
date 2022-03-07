export const planets = (planet)=>{
    return{
        type:'PLANETS',
        payload:planet
    }
}


export const nextPage = (url)=>{
    return{
        type:'NEXT',
        payload:url
    }
}

export const previousPage = (url)=>{
    return{
        type:'PREVIOUS',
        payload:url
    }
}