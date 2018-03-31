import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = []
  switch (action.type) {
    case 'RECEIVE_SESSION_ERRORS':
      return action.errors;
    case 'RECEIVE_CURRENT_USER':
      newState = [];
      return newState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
