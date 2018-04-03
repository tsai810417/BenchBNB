import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from 'react';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In'
  }
}

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
