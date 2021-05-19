const initialState = {
    items: [],
    item: {}
};

const counterReducer = (state = initialState, action) => {
    switch (action.type){
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