const initialState = {
    items: [],
    item: {}
};

const counterReducer = (state = initialState, action) => {
    console.log(action,"action-2")
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'FETCH_POSTS':
            return {
                ...state,
                items: action.payload
            };
        case 'NEW_POST':
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        default:
            return state;
    }
};

export default counterReducer;