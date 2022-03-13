const urlPrev = (state = [] , action)=>{
    switch(action.type){
        case 'PREVIOUS':
            return action.payload;
        default:    
            return state;
    }
}

export default urlPrev;