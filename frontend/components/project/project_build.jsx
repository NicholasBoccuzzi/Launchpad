import React from 'react';
import { Redirect } from 'react-router-dom';

class projectBuild extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: parseInt(this.props.projectId),
      wrongUser: false
    };

    this.displayUserIcon = this.displayUserIcon.bind(this);
    this.displayProjectTitle = this.displayProjectTitle.bind(this);
    this.displayCampaignBox = this.displayCampaignBox.bind(this);
    this.displayAccountBox = this.displayAccountBox.bind(this);
    this.green = this.green.bind(this);
    this.greenCount = 0;
    this.checkRewardText = this.checkRewardText.bind(this);
    this.checkProfileText = this.checkProfileText.bind(this);
    this.checkAccountText = this.checkAccountText.bind(this);
    this.checkBasicsText = this.checkBasicsText.bind(this);
    this.checkStoryText = this.checkStoryText.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.projectId);
  }

  componentWillReceiveProps(nextProps) {

    let projectUser;
    if (nextProps.project) {
      projectUser = nextProps.project.creator_id;
      if (this.props.currentUser.id !== projectUser) {
        this.setState({wrongUser: true});
      }
    }

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

  green(el) {
    if (this.props.project) {
      if (this.props.project.live) {
        this.greenCount = 5;
        return "pbuild-green";
      } else if (el === "reward" && this.props.project.rewards.length > 0) {
        this.greenCount += 1;
        return "pbuild-green";
      } else if (el === "account") {
        this.greenCount += 1;
        return "pbuild-green";
      } else if (
        el === "basics" &&
        this.props.project.title
         && this.props.project.summary
         && this.props.project.funding_goal
         && this.props.project.deadline
         && this.props.project.category
         && this.props.project.image
         && this.props.project.location
       ){
         this.greenCount += 1;
         return "pbuild-green";
      } else if ( el === "story" && this.props.project.body) {
        this.greenCount += 1;
        return "pbuild-green";
      }
    }
  }

  checkRewardText() {
    if (this.props.project.live) {
      return "Done.";
    }

    if (this.props.project.rewards.length > 0) {
      return "Done.";
    } else {
      return "Set your rewards and shipping costs.";
    }
  }

  checkProfileText() {
    if (this.props.project.live) {
      return "Done.";
    }

    if (this.props.currentUser.biography) {
     return "Done";
   } else {
     return "Write a bio and add links to your social accounts.";
   }
  }

  checkAccountText() {
    if (this.props.project.live) {
      return "Done";
    } else {
      return "Done";
    }
  }

  checkBasicsText() {
    if (this.props.project.live) {
      return "Done";
    }

    if (
      this.props.project.title
       && this.props.project.summary
       && this.props.project.funding_goal
       && this.props.project.deadline
       && this.props.project.category
       && this.props.project.image
       && this.props.project.location
     ) {
       return "Done";
     } else {
       return "Add an image, set your funding goal, and more.";
     }
  }

  checkStoryText() {
    if (this.props.project.live) {
      return "Done.";
    }

    if (this.props.project.body) {
      return "Done.";
    } else {
      return "Add a video and detailed project video";
    }
  }


  displayAccountBox() {
    if (this.props.project) {
      return (
        <section className="pbuild-campaign-container">
          <main className="pbuild-campaign-ul">
            <a href={`#/user/${this.props.currentUser.id}`} className="pbuild-li">
              <div className="flex-row">
                <i className={`far fa-check-circle pbuild-circle ${this.green("profile")}`}></i>
                <section className="flex-col margin-auto-zero">
                  <div className="pbuild-button-header">Profile</div>
                  <div className="pbuild-button-text">{this.checkProfileText()}</div>
                </section>
              </div>
            </a>
            <a href="mailto:Nicholas.R.Boccuzzi@gmail.com" className="pbuild-li pbuild-account-li">
              <div className="flex-row">
                <i className={`far fa-check-circle pbuild-circle ${this.green("account")}`}></i>
                <section className="flex-col margin-auto-zero pbuild-account-marg">
                  <div className="pbuild-button-header">Account</div>
                  <div className="pbuild-button-text">{this.checkAccountText()}</div>
                  <div className="pbuild-reply-container">
                    <i class="far fa-clock pbuild-clock"></i>
                    <div className="pbuild-reply"> 3 days to receive reply</div>
                  </div>
                </section>
              </div>
            </a>
          </main>
        </section>
      );
    }
  }

  displayCampaignBox () {
    if (this.props.project) {
      return (
        <section className="pbuild-campaign-container">
          <main className="pbuild-campaign-ul">
            <a href={`#/projects/${this.props.project.id}/edit`} className="pbuild-li">
              <div className="flex-row">
                <i className={`far fa-check-circle pbuild-circle ${this.green("basics")}`}></i>
                <section className="flex-col margin-auto-zero">
                  <div className="pbuild-button-header">Basics</div>
                  <div className="pbuild-button-text">{this.checkBasicsText()}</div>
                </section>
              </div>
            </a>
            <a href={`#/projects/${this.props.project.id}/edit/rewards`} className="pbuild-li">
              <div className="flex-row">
                <i className={`far fa-check-circle pbuild-circle ${this.green("reward")}`}></i>
                <section className="flex-col margin-auto-zero">
                  <div className="pbuild-button-header">Rewards</div>
                  <div className="pbuild-button-text">{this.checkRewardText()}</div>
                </section>
              </div>
            </a>
            <a href={`#/projects/${this.props.project.id}/edit/story`} className="pbuild-li">
              <div className="flex-row">
                <i className={`far fa-check-circle pbuild-circle ${this.green("story")}`}></i>
                <section className="flex-col margin-auto-zero">
                  <div className="pbuild-button-header">Story</div>
                  <div className="pbuild-button-text">{this.checkStoryText()}</div>
                </section>
              </div>
            </a>
          </main>
        </section>
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
    let redirect;
    if (this.state.wrongUser) {
      redirect = <Redirect to={`/projects/${this.state.id}`} />;
    }

    return (
      <main>
        {redirect}
        <section className="pbuild-top-container">
          {this.displayProjectTitle()}
          {this.displayUserIcon()}
        </section>
        <section className="pbuild-preview-button-section">
          <main className="pbuild-preview-button-container">
            <section className="pbuild-preview-button-click">
              <i className="fas fa-eye pbuild-eyeball"></i>
              <div className="pbuild-preview-button">Preview</div>
            </section>
          </main>
        </section>
      <section className="pbuild-project-info-section">
        <main className="pbuild-project-info-container">
          <div className="pbuild-project-info-inner-cont">
            <div className="pbuild-header">Campaign</div>
            {this.displayCampaignBox()}
            <div className="pbuild-header pbuild-account">Account</div>
            {this.displayAccountBox()}
          </div>
          <section className="pbuild-completion-container">
            <div className="pbuild-completion-count">
              {this.greenCount} of 5 complete
            </div>
            <div className="pbuild-completion-text">
              After you've completed all steps, you can submit for review
            </div>
          </section>
        </main>
      </section>
      </main>
    );
  }
}

export default projectBuild;
