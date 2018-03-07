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
    this.forLogin = this.forLogin.bind(this);
    this.forCreate = this.forCreate.bind(this);
    this.forUpdate = this.forUpdate.bind(this);
    this.expDisplayCollection = this.expDisplayCollection.bind(this);
    this.expMarginCheck = this.expMarginCheck.bind(this);
    this.expCollectionMargin = this.expCollectionMargin.bind(this);
  }

  componentDidMount() {
    if (this.props.explore) {
      let modal = document.getElementById("modal");
      modal.addEventListener('scroll', (e) => {
      this.setState({currentScrollPosition: e.currentTarget.scrollTop});
      });
      modal.focus();
    }
  }

  componentWillUnmount () {
    if (this.props.location === "login") {
      this.props.clearSessionErrors();
    }
  }

  expDisplayCollection () {
    if (this.state.currentScrollPosition > 0) {
      return (
        "exp-col-collection"
      );
    } else {
      return (
        "exp-col-container"
      );
    }
  }

  expCollectionMargin () {
    if (this.state.currentScrollPosition > 0) {
      return {top: this.state.currentScrollPosition};
    }
  }

  expMarginCheck () {
    if (this.state.currentScrollPosition < 1) {
      return (
        "exp-list"
      );
    } else {
      return (
        "exp-list exp-first-margin"
      );
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

  renderIfCreateProjectActive () {
    if (this.props.projectCreateUpdateModalActive && this.props.location.pathname === "/startproject") {
      return (
        <div className="submit-project-bar animated slideInUp">
          <button className="discard-project-changes" onClick={() => history.go(0)}>Discard changes</button>
          <input type="submit" className="project-save-button" value="Create" onClick={this.handleSubmit}></input>
        </div>
      );
    } else if (this.props.projectCreateUpdateModalActive && this.props.location.pathname.includes("edit")){
      return (
        <div className="submit-project-bar animated slideInUp">
          <button className="discard-project-changes" onClick={() => history.go(0)}>Discard changes</button>
          <input type="submit" className="project-save-button" value="Save" onClick={this.handleSubmit}></input>
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

    forCreate() {
      if (this.props.location.pathname === "/startproject") {
        return (
            <div>
              {this.renderIfCreateProjectActive()}
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

    forExplore() {
      if (this.props.explore) {
        return (
          <main id="modal" className="exp-full-container">
            <div className="animated slideInUp exp-centered-container">
              <div style={this.expCollectionMargin()} className={this.expDisplayCollection()}>
                <div className="exp-col-title">
                  Collections
                </div>
                <div className="exp-bigger-x" onClick={this.props.deactivateExploreModal}>
                  <i className="fas fa-times"></i>
                </div>
              </div>
              <section className={this.expMarginCheck()}>
                <div className="exp-list-item">Recommended For You</div>
                <div className="exp-list-item">Projects We Love</div>
                <div className="exp-list-item">Trending Projects</div>
                <div className="exp-list-item">Nearly Funded</div>
                <div className="exp-list-item">Recommended For You</div>
                <div className="exp-list-item">Projects We Love</div>
                <div className="exp-list-item">Trending Projects</div>
                <div className="exp-list-item">Nearly Funded</div>
                <div className="exp-list-item">Recommended For You</div>
                <div className="exp-list-item">Projects We Love</div>
                <div className="exp-list-item">Trending Projects</div>
                <div className="exp-list-item">Nearly Funded</div>
                <div className="exp-list-item">Recommended For You</div>
                <div className="exp-list-item">Projects We Love</div>
                <div className="exp-list-item">Trending Projects</div>
                <div className="exp-list-item exp-bottom">Nearly Funded</div>
              </section>
            </div>
          </main>
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
        {this.forCreate()}
        {this.forUpdate()}
        {this.forExplore()}
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
