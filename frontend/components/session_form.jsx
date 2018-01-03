import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  signUpLink() {
    if (this.props.formType === 'login') {
      return(
      <div className="signup-button-container">
        <h2 className="new-signup">New to Launchpad
        <Link to="/signup">Sign Up</Link>
        </h2>
      </div>
      );
    }
  }

  loginLink() {
    if (this.props.formType === 'signup') {
      return(
      <div className="signup-button-container">
        <h2 className="new-login">Already registered? &nbsp;
         <Link className ="login link" to="/login">Log In</Link>
        </h2>
      </div>
      );
    }
  }

  renderEmail() {
    if (this.props.formType === 'signup') {
      return (
        <label>
          <br/>
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            placeholder="Email"/>
        </label>
      );
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-signup-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.loginLink()}
          {this.props.formType}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            {this.renderEmail()}

            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
            {this.signUpLink()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
