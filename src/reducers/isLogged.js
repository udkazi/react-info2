const loggedReducer = (state = false, action) => {
    console.log(action,"action-1")
    switch(action.type){
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
};

export default loggedReducer