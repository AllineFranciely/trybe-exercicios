import { combineReducers } from "redux";
import loginReducer from './loginReducer';
import addReducer from './addReducer';

const rootReducers = combineReducers({ addReducer, loginReducer });

export default rootReducers;