import React from 'react';
import { Link } from 'react-router-dom';
import CreateProjectForm from './project/create_project_container';
import { Redirect } from 'react-router-dom';

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      redirect: false,
      currentScrollPosition: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRewardsSubmit = this.handleRewardsSubmit.bind(this);
    this.forLogin = this.forLogin.bind(this);
    this.forUpdate = this.forUpdate.bind(this);
    this.forRewards = this.forRewards.bind(this);
  }

  componentDidMount() {
    if (this.props.explore) {
      let modal = document.getElementById("modal");
      modal.addEventListener('scroll', (e) => {
      this.setState({currentScrollPosition: Math.ceil(e.currentTarget.scrollTop)});
      });
      modal.focus();
    }
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

    if (that.props.location.pathname === "/startproject") {
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
      });
    }
  }

  handleRewardsSubmit (e) {
    e.preventDefault();
    const that = this;

    console.log(this.props.rewardsState);
  }

  renderIfCreateProjectActive () {
    if (this.props.projectCreateUpdateModalActive && this.props.location.pathname.includes("edit") && this.props.activeTab === "Basics"){
      return (
        <div className="submit-project-bar animated slideInUp">
          <button className="discard-project-changes" onClick={() => history.go(0)}>Discard changes</button>
          <input type="submit" className="project-save-button" value="Save" onClick={this.handleSubmit}></input>
        </div>
      );
    }
    else if (this.props.projectCreateUpdateModalActive && this.props.location.pathname.includes("edit") && this.props.activeTab === "Rewards"){
      return (
        <div className="submit-project-bar animated slideInUp">
          <button className="discard-project-changes" onClick={() => history.go(0)}>Discard changes</button>
          <input type="submit" className="project-save-button" value="Save" onClick={this.handleRewardsSubmit}></input>
        </div>
      );
    }
  }


    forLogin () {
      if (this.props.location.pathname === "/login") {
        return (
          <div>
            {this.renderIfErrorActive()}
          </div>
        );
      }
    }

    forUpdate() {
      if (this.props.location.pathname.includes("edit")
      && this.props.location.pathname.includes("projects")) {
        return (
          <div>

            {this.renderIfCreateProjectActive()}
          </div>
        );
      }
    }

    forRewards() {
      if (this.props.location.pathname.includes("edit")
      && this.props.location.pathname.includes("projects")
      && this.props.activeTab === "Rewards"
    ) {
        return (
          <div>
            {this.renderIfCreateProjectActive()}
          </div>
        );
      }
    }


  render () {

    let redirected;
    if (this.state.redirect) {
      if (this.props.id) {
        redirected = <Redirect to={`/projects/${this.props.id}`} />;
      }
      else {
        redirected = <Redirect to={`/discover`} />;
      }
    }

    return (
      <div>
        {redirected}
        {this.forLogin()}
        {this.forUpdate()}
        {this.forRewards()}
      </div>

    );
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
