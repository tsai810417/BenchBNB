import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    }
  }

  render () {
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('username')} />
          </label>

          <label>Password
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')} />
          </label>

          <input type='submit' value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default SessionForm;
