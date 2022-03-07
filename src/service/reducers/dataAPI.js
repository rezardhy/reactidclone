const dataAPI = (state = [] , action)=>{
    switch(action.type){
        case 'PLANETS':
            return action.payload;
        default:
            return state;
    }
}

export default dataAPI;