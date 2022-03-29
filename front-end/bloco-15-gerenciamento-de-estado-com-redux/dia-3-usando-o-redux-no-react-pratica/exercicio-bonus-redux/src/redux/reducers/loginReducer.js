import { MY_LOGIN_ACTION } from '../actions/index';

const initialState = {};

const loginReducer = (state= initialState, action) => {
  switch(action.type) {
    case MY_LOGIN_ACTION:
      return action.payload;
      default:
        return state;
  }
};

export default loginReducer;