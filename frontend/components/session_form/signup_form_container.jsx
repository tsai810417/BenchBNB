import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up'
  }
}

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(signup(user))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
