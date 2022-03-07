const urlData = (state = [] , action)=>{
    switch(action.type){
        case 'NEXT':
            console.log(action.payload)
            return action.payload;
        case 'PREVIOUS':
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default urlData;