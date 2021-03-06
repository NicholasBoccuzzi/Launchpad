import React from 'react';
import { Link } from 'react-router-dom';
import { Line, Circle } from 'rc-progress';
import { withRouter } from 'react-router-dom';

class ProjectListItem extends React.Component {
  constructor(props) {
    super(props);
    this.percentMath = this.percentMath.bind(this);
    this.dateMath = this.dateMath.bind(this);
  }

  percentMath () {
      let percent = (this.props.project.current_funding/this.props.project.funding_goal)*100;
      if (percent > 100) {
        return 100;
      } else {
        return percent;
      }
  }

  percentDisplayMath() {
    let percent = (this.props.project.current_funding/this.props.project.funding_goal)*100;
    return Math.floor(percent);
  }

  dateMath () {
    const time = {
      days: Math.floor((new Date(this.props.project.deadline) - new Date(Date.now()))/1000/60/60/24),
      hours: Math.floor((new Date(this.props.project.deadline) - new Date(Date.now()))/1000/60/60/24%10)
    };

    if (time.hours > 0){
      return (
        <h1 className="li-percent-stats">{time.days} days {time.hours} hours remaining</h1>
      );
    } else if (time.days > 0) {
      return (
        <h1 className="li-percent-stats">{time.days} days remaining</h1>
      );
    } else {
      return <h1 className="li-percent-stats">Campaign Ended</h1>;
    }
  }

  render () {
    if (!this.props.backed) {
      return (
        <div>
          <main className="list-item-container" key={this.props.project.id}>
            <div className="li-image-container">
              <a className="list-item-image" href={`#/projects/${this.props.project.id}`}>
                <img className="list-item-image" src={this.props.project.image}/>
              </a>
            </div>
            <div className="li-mid-container">
              <a className="li-title-link" href={`#/projects/${this.props.project.id}`}>
                <h3 className="li-title-link">{this.props.project.title}</h3>
              </a>
              <h3 className="small-text">by <a href={`#/user/${this.props.project.user.id}`}>{this.props.project.user.username}</a></h3>
            </div>
            <div className="li-bot-container">
              <Line className="li-percent-indicator" trailColor="#F1EEEA" percent={this.percentMath()} strokeWidth=".1" strokeColor="#169D74" />
              <br/>
              <h1 className="li-percent-stats green">${this.props.project.current_funding} pledged</h1>
              <h1 className="li-percent-stats">{this.percentDisplayMath()}% funded</h1>
              {this.dateMath()}
              <br/>
              <a className="li-percent-stats li-category-link" href="#">{this.props.project.category}</a>
            </div>

          </main>
        </div>
      );
    } else {
      return (
        <div>
          <main className="list-item-container" key={this.props.project.id}>
            <div className="li-image-container">
              <a className="list-item-image" href={`#/projects/${this.props.project.id}`}>
                <img className="list-item-image" src={this.props.project.image}/>
              </a>
            </div>
            <div className="li-mid-container">
              <a className="li-title-link" href={`#/projects/${this.props.project.id}`}>
                <h3 className="li-title-link">{this.props.project.title}</h3>
              </a>
              <h3 className="small-text">by <a href={`#/user/${this.props.project.creator_id}`}>{this.props.project.creator_id}</a></h3>
            </div>
            <div className="li-bot-container">
              <Line className="li-percent-indicator" trailColor="#F1EEEA" percent={this.percentMath()} strokeWidth=".1" strokeColor="#169D74" />
              <br/>
              <h1 className="li-percent-stats green">${this.props.project.current_funding} pledged</h1>
              <h1 className="li-percent-stats">{this.percentDisplayMath()}% funded</h1>
              {this.dateMath()}
              <br/>
              <a className="li-percent-stats li-category-link" href="#">{this.props.project.category}</a>
            </div>

          </main>
        </div>
      );
    }
  }
}

export default withRouter(ProjectListItem);
