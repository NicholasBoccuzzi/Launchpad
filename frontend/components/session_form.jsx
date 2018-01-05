import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from './modal_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.displayModal = this.displayModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount () {
    this.props.clearSessionErrors();
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
        <h2 className="new-signup">New to Launchpad?
         &nbsp;<Link to="/signup" className="login-signup-link">Sign Up!</Link>
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
         <Link className="login-link login-signup-link" onClick={this.props.clearSessionErrors} to="/login">LOGIN</Link>
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
          <input type="email"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            placeholder="Email"/>
        </label>
      );
    }
  }


  renderSubmit() {
      if (this.props.formType === 'signup')
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
          value="Log me in!"
          />
      );
    }
  }

  demoLogin (e) {
    e.preventDefault();

      let user = {
          user: {
          username: "demo",
          password: "password"
        }
      };

    this.props.login(user);
  }

  renderOr () {
    return (
      <div>
        <div className="inline">
          <h3 className="strike">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h3>
          <h3 >&nbsp;OR&nbsp;</h3>
          <h3 className="strike">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h3>
        </div>
        <button className="login-input demo-account-button"
          onClick={this.demoLogin}>Try the Demo!</button>
      </div>
    );
  }


  displayModal() {
    if (this.props.errorModalActive) {
      return <Modal />;
    }
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      if (this.props.formType === "signup") {
        return (
          <ul className="errors-list">
            {this.props.errors.map((error, i) => (
              <li className="signup-errors" key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      } else {
          if (!this.props.errorModalActive) {
            this.props.toggleErrorModal();
        }
      }
    }
  }

  displayCorrectForm () {
    if (this.props.formType === "signup") {
      return (
        <form onSubmit={this.handleSubmit}
          className="login-form-box signup-container">
          <h2 className="form-title">{this.props.formType.toUpperCase()}</h2>
          {this.renderErrors()}
          <br/>
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
            <br/>
            {this.renderOr()}
            <br/>
          </div>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}
          className="login-form-box login-container">
          <h2 className="form-title">{this.props.formType.toUpperCase()}</h2>
          {this.renderErrors()}
          <br/>
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
            <br/>
            {this.renderOr()}
            <br/>
          </div>
        </form>
      );
    }
  }

  render() {
    return (
      <div>
        {this.displayModal()}
        <div className="login-signup-container">
          {this.loginLink()}
          {this.displayCorrectForm()}
        {this.signUpLink()}
      </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
