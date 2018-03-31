import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const login = (user) => dispatch (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

const logout = () => dispatch (
  APIUtil.logout.then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

const signup = (user) => dispatch (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err =>(
    dispatch(receiveErrors(err.responseJSON))
  ))
);

const receiveCurrentUser = (currentUser) => {
  type: RECEIVE_CURRENT_USER,
  currentUser
};

const receiveErrors = (errors) => {
  type: RECEIVE_SESSION_ERRORS,
  errors
};
