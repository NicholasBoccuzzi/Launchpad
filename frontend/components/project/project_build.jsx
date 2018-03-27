import React from 'react';

class projectBuild extends React.Component {
  constructor(props) {
    super(props);
    this.displayUserIcon = this.displayUserIcon.bind(this);
    this.displayProjectTitle = this.displayProjectTitle.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.projectId);
  }

  componentWillReceiveProps(nextProps) {

  }

  displayProjectTitle() {
    if (this.props.project) {
      return (
        <main className="pbuild-proj-title-cont">
          {this.props.project.title} by {this.props.currentUser.username}
        </main>
      );
    }
  }

  displayUserIcon() {
    if (this.props.currentUser) {
      return (
        <div className="pbuild-user-image-container">
          <img className="pbuild-user-image"
            src={this.props.currentUser.image}>

          </img>
        </div>
      );
    }
  }

  render () {
    return (
      <main>
        <section className="pbuild-top-container">
          {this.displayProjectTitle()}
          {this.displayUserIcon()}
        </section>
        <section className="pbuild-preview-button-section">
          <main className="pbuild-preview-button-container">
            <section className="pbuild-preview-button-click">
              <i class="fas fa-eye pbuild-eyeball"></i>
              <div className="pbuild-preview-button">Preview</div>
            </section>
          </main>
        </section>
      <section className="pbuild-project-info-container">



      </section>
      </main>
    );
  }
}

export default projectBuild;
