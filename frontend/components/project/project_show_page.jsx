import React from 'react';
import { Line, Circle } from 'rc-progress';
import { Link } from 'react-router-dom';

class projectShow extends React.Component {
  constructor(props) {
    super(props);
    this.dateMath = this.dateMath.bind(this);
    this.displayBackProject = this.displayBackProject.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchProject(this.props.projectNum);
  }

  componentWillUnmount() {

  }

  dateMath () {
    const time = {
      days: Math.floor((new Date(this.props.project.deadline) - new Date(Date.now()))/1000/60/60/24),
      hours: Math.floor((new Date(this.props.project.deadline) - new Date(Date.now()))/1000/60/60/24%10)
    };

    if (time.days > 0){
      return (
        <div className="show-main-info bold">{time.days} <h2 className="show-info-backup-text bold">days remaining</h2></div>
      );
    } else if (time.days === 0 && time.hours > 0) {
      return (
        <div className="show-main-info bold">{time.hours}   <h2 className="show-info-backup-text bold">hours remaining</h2></div>
      );
    } else {
        return <h1 className="show-main-info bold">Campaign Ended</h1>;
      }
    }

  percentMath () {
      let percent = (this.props.project.current_funding/this.props.project.funding_goal)*100;
      if (percent > 100) {
        return 100;
      } else {
        return percent;
      }
  }

  displayBackProject(string) {
    if (string === "text") {
      if (this.props.currentUser && this.props.project) {
        if (this.props.currentUser.backings && this.props.currentUser.backingIds.includes(this.props.project.id)) {
          return "View Pledge";
        } else {
          return "Back this Project";
        }
      }else {
        return "Back this Project";
      }
    } else if (string === "class") {
      if (this.props.currentUser && this.props.project) {
        if (this.props.currentUser.backings && this.props.currentUser.backingIds.includes(this.props.project.id)) {
          return "show-backproject blue";
        } else {
          return "show-backproject";
        }
      } else {
        return "show-backproject";
      }
    }
  }

  renderUser() {
    if (this.props.currentUser) {
      if (this.props.currentUser.id == this.props.project.creator_id) {
        return (
          <section className="project-show-creator-info">
            <Link className="edit-button"
              to={`/projects/${this.props.project.id}/edit`}>
              Edit Project
            </Link>
          </section>
        );
      } else {
        return (
          <section className="project-show-creator-info">
            <div className="project-show-creator-icon-box">
              <a href={`#/user/${this.props.project.creator_id}`}>
                <img className="project-show-creator-icon"
                  src={this.props.project.user_image}>
                </img>
              </a>
            </div>
            <div className="small-text">
              By {this.props.project.user.username}
            </div>
          </section>
        );
      }
    } else {
      return (
        <section className="project-show-creator-info">
          <div className="project-show-creator-icon-box">
            <a href={`#/user/${this.props.project.creator_id}`}>
              <img className="project-show-creator-icon"
                src={this.props.project.user_image}>
              </img>
            </a>
          </div>
          <div className="small-text">
            By {this.props.project.user.username}
          </div>
        </section>
      );
    }

  }


  render () {
    if (this.props.project) {
      return (
        <main className="show-page-container">
          <div className="project-show-page-container">
            <div className="project-intro">
              {this.renderUser()}
              <section className="project-show-title-container">
                <h1 className="project-show-title">
                  {this.props.project.title}
                </h1>
                <h1 className="project-show-summary">
                  {this.props.project.summary}
                </h1>
            </section>
            </div>
            <div className="show-page-info-container">
              <div className="show-video-container">
                <img className="show-image-resize" src={this.props.project.image}></img>
              </div>
              <main className="show-page-info">
                <Line className="show-progress-bar"
                  trailColor="#F1EEEA"
                  percent={this.percentMath()}
                  strokeWidth="1"
                  strokeColor="#169D74" />

                <h1 className="show-main-info cash bold">${this.props.project.current_funding}</h1>
                <h2 className="show-info-backup-text bold">Pledged of ${this.props.project.funding_goal} goal</h2>
                <h1 className="show-main-info bold">200</h1>
                <h2 className="show-info-backup-text bold">Backers</h2>
                <h1>{this.dateMath()}</h1>
                <section className="show-backproject-container">
                  <div className={this.displayBackProject("class")}>
                    {this.displayBackProject("text")}
                  </div>
                </section>
              </main>
            </div>
            <div className="show-page-buttons">
              <div className="show-main-button-container">
                <div className="show-main-button">
                  <div className="launchpad-loves">L</div>&nbsp;&nbsp;
                    <div className="small-text">
                      Project We Love
                    </div>
                  </div>
                  <div className="show-main-button">
                    <i class="fa fa-compass" aria-hidden="true"></i>&nbsp;&nbsp;
                      <div className="small-text">
                        {this.props.project.category.toUpperCase()}
                      </div>
                    </div>
                    <div className="show-main-button">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;
                        <div className="small-text">
                          {this.props.project.location.toUpperCase()}
                        </div>
                    </div>
              </div>
            </div>
          </div>
        </main>
      );
    } else {
      return (
        <h3>hi</h3>
      );
    }
  }
}

export default projectShow;
