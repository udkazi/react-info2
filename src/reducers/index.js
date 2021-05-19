import postReducer from  './postReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: postReducer
});

export default allReducers;