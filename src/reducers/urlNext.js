const urlNext = (state = [] , action)=>{
    switch(action.type){
        case 'NEXT':
            return action.payload;
        default:    
            return state;
    }
}

export default urlNext;