import { combineReducers } from 'redux';
import myReducer from './myReducer';


// combineReducers recebe todos os reducers criados, mesmo que tenha apenas 1 // 
const rootReducer = combineReducers({ myReducer });

export default rootReducer;