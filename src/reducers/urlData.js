const urlData = (state = [] , action)=>{
    switch(action.type){
        case 'NEXT':
            return action.payload;
        case 'PREVIOUS':
            return action.payload;
        default:
            return state;
    }
}

export default urlData;