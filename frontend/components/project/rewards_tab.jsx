import React from 'react';
import { Link } from 'react-router-dom';

class rewardsTab extends React.Component {
  constructor () {
    super();

    this.currentRewardCount = 1;
  }

  render () {

    return (
      <div>
        <header className="get-started-container animated fadeIn">
          <h1 className="get-started-title animated FadeIn">Set your rewards and shipping costs</h1>
          <h2 className="get-started-body">Invite backers to be a part of the
            creative experience by offering rewards like a copy of what you’re making,
            a special experience, or a behind-the-scenes look into your process.</h2>
        </header>
        <main className="new-project-container no-overflow">
          <form className="project-form animated slideInLeft">
            <div className="reward-form-input-box">
              <div className="reward-form-input-title-box">
                <h3 className="reward-form-input-title">Reward #{this.currentRewardCount}</h3>
              </div>
              <div className="flexed-columns">
                <div className="project-rewards-info-container flexed-columns">
                  <div className="flexed-rows reward-input-container">
                    <div className="reward-input-title">Title</div>
                    <input className="reward-user-input"></input>
                  </div>
                  <div className="flexed-rows reward-input-container">
                    <div className="reward-input-title">Pledge Amount</div>
                    <input
                      className="reward-user-input"
                      placeholder="$0">
                    </input>
                  </div>
                  <div className="flexed-rows reward-input-container">
                    <div className="reward-input-title reward-description">Description</div>
                    <textarea className="reward-user-input textarea"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default rewardsTab;
