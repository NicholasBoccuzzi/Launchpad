import React from 'react';
import { Link } from 'react-router-dom';
import CreateProjectForm from './project/create_project_container';

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

    this.props.formData.set(`project[image]`, this.props.state.image.imageFile);
    const project = this.props.formData;
    this.props.createProject(project);
  }

  renderIfCreateProjectActive () {
    if (this.props.createProjectModalActive) {
      return (
        <div className="submit-project-bar">
          <button className="discard-project-changes" onClick={() => history.go(0)}>Discard changes</button>
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
