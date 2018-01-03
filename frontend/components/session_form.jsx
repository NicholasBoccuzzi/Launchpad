import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      debugger
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
    if (this.props.formType === 'LOGIN') {
      return(
      <div className="signup-button-container">
        <h2 className="new-signup">New to Launchpad?
         &nbsp;<Link to="/signup">SIGN UP</Link>
     </h2>
      </div>
      );
    }
  }

  loginLink() {
    if (this.props.formType === 'SIGNUP') {
      return(
      <div className="signup-button-container">
        <h2 className="new-login">Already registered? &nbsp;
         <Link className ="login-link" to="/login">LOGIN</Link>
        </h2>
      </div>
      );
    }
  }

  renderEmail() {
    if (this.props.formType === 'SIGNUP') {
      return (
        <label>
          <br/>
          <input type="email"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            placeholder="Email"/>
        </label>
      );
    }
  }

  renderErrors() {
    if (this.props.errors) {
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
  }

  renderSubmit() {
      if (this.props.formType === 'SIGNUP')
      return (
        <input type="submit"
          className="login-input new-account-button"
          value="Create your account!"
        />
      );
    else {
      return (
        <input type="submit"
          className="login-input new-account-button"
          value="Sign In to Launchpad!"
          />
      );
    }
  }

  renderDemo () {
  }



  render() {
    return (
      <div className="login-signup-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.loginLink()}
          <h2 className="form-title">{this.props.formType}</h2>
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
            {this.renderSubmit()}
            <div className="inline">
              <h3 className="strike">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h3>
              <h3 >&nbsp;OR&nbsp;</h3>
              <h3 className="strike">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h3>
            </div>
            <br/>
            <button onClick={this.renderDemo}
              class="login-input new-account-button">Try Demo!</button>
            {this.signUpLink()}
            <br/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
