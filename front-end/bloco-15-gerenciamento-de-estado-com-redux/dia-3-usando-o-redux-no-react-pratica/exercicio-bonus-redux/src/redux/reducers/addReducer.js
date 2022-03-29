import { MY_ADD_ACTION } from '../actions/index';

const initialState = [];

const addReducer = (state= initialState, action) => {
  switch(action.type) {
    case MY_ADD_ACTION:
      return [...state, action.payload];
      default:
        return state;
  }
};

export default addReducer;