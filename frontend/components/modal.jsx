import React from 'react';
import { Link } from 'react-router-dom';
import CreateProjectForm from './project/create_project_container';
import { Redirect } from 'react-router-dom';

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      redirect: false
    };
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
    e.preventDefault();
    const that = this;

    if (that.props.location === "startproject"){
      that.props.formData.set(`project[image]`, that.props.state.image.imageFile);
      const project = that.props.formData;
      that.props.createProject(project).then(() => {
        that.setState({ redirect: !that.state.redirect });
      });
    } else if (that.props.location.pathname.includes("edit")
    && that.props.location.pathname.includes("projects")) {
      if (that.props.image.imageFile) {
        that.props.formData.set(`project[image]`, that.props.image.imageFile);
      }
      const project = that.props.formData;
      that.props.updateProject(project, that.props.id).then(() => {
        that.setState({ redirect: !that.state.redirect });
        // that.props.location.pathname = '/projects/81'
      });
    }
  }

  renderIfCreateProjectActive () {
    if (this.props.projectCreateUpdateModalActive) {
      return (
        <div className="submit-project-bar">
          <button className="discard-project-changes" onClick={() => history.go(0)}>Discard changes</button>
          <input type="submit" className="project-save-button" value="Save" onClick={this.handleSubmit}></input>
        </div>
      );
    } else {
      return (
        <div className="submit-project-bar">
          <button className="discard-project-changes" onClick={() => history.go(0)}>Discard changes</button>
          <input type="submit" className="project-save-button" value="Create" onClick={this.handleSubmit}></input>
        </div>
      );
    }
  }



  render () {
    let redirected;
    if (!this.state.redirect) {
      redirected = null;
    } else {
      redirected = <Redirect to={`/projects/${this.props.id}`} />;
    }
    if (this.props.location === "login") {
      return (
        <div>
          {this.renderIfErrorActive()}
        </div>
      );
    } else if (this.props.location === "startproject") {
      return (
          <div>
            {redirected}
            {this.renderIfCreateProjectActive()}
          </div>
      );
    } else if (this.props.location.pathname.includes("edit")
    && this.props.location.pathname.includes("projects")) {
      return (
        <div>
          {redirected}
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
