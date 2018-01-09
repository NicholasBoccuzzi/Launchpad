import React from 'react';
import { Link } from 'react-router-dom';

class Modal extends React.Component {
  constructor (props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount () {
    if (this.props.location === "login") {
      this.props.clearSessionErrors();
    }
  }

  renderIfErrorActive () {
    if (this.props.errorModalActive) {
      return (
        <div>
          <p className="modal-box">
            The email address and password you entered do not match.
          </p>
          <div onClick={() => {
              return (
                this.props.clearSessionErrors(),
                this.props.toggleErrorModal()
                );
              }
            }
            className="dark-background"></div>
        </div>
      );
    }
  }

  handleSubmit (e) {
    e.preventDefault;
    const project = this.props.state;
    project.funding_goal = parseInt(project.funding_goal);
    debugger
    this.props.createProject(project);
  }

  renderIfCreateProjectActive () {
    if (this.props.createProjectModalActive) {
      return (
        <div className="submit-project-bar">
          <Link className="discard-project-changes" to="/createproject">Discard changes</Link>
          <input type="submit" className="project-save-button" value="Save" onClick={this.handleSubmit}></input>
        </div>
      );
    }
  }

  render () {
    if (this.props.location === "login") {
      return (
        <div>
          {this.renderIfErrorActive()}
        </div>
      );
    } else if (this.props.location === "startproject") {
      return (
          <div>
            {this.renderIfCreateProjectActive()}
          </div>
      );
    }
  }
}

export default Modal;




// may use this later
// const errors = this.props.errors.map ((error, i) => {
//   return (
//     <li key={`error-${i}`}>
//       {error}
//     </li>
//   );
// });
// but for now, all Kickstarter does is render a model with the quote below
