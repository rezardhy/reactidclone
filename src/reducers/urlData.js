const urlData = (state = [] , action)=>{
    switch(action.type){
        case 'NOW':
            return action.payload;
        default:    
            return state;
    }
}

export default urlData;