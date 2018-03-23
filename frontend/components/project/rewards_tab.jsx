import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal_container';
import RewardsTabItem from './rewards_tab_item_container';

class rewardsTab extends React.Component {
  constructor (props) {
    super(props);
    this.rewards = [];
    this.activeTab = "Rewards";
    this.newRewardBox = this.newRewardBox.bind(this);
    this.displayRewardsBoxes = this.displayRewardsBoxes.bind(this);
    this.removeReward = this.removeReward.bind(this);
    this.updateRewards = this.updateRewards.bind(this);
    this.renderRewardSubmit = this.renderRewardSubmit.bind(this);
    this.state = {
      id: props.id
    };

  }

  newRewardBox(num) {
    return (
      <RewardsTabItem rewardNum={num} key={num} removeReward={this.removeReward}/>
    );
  }

  renderRewardSubmit () {
    if (this.activeTab === "Rewards" && this.props.rewardsModalActive) {
      return (
        <Modal
          activeTab={this.activeTab}
          location={this.props.location}
          id={this.state.id}
          />
      );
    }
  }

  updateRewards() {
    this.rewards.forEach(reward => {
      console.log(reward);
    });
  }

  removeReward(e) {

    this.rewards.splice(parseInt(e.currentTarget.id - 1), 1);
    this.props.checkRewardCount();
  }

  displayRewardsBoxes() {
    if (this.props.location.pathname.includes("edit")
    && this.props.loadedRewards === false && this.rewards.length < 1
  ) {
      this.rewards.push(this.newRewardBox(this.rewards.length + 1));
    }
  }

  addReward(num) {
    this.rewards.push(this.newRewardBox(num));
    this.props.checkRewardCount();
  }



  render () {

    this.displayRewardsBoxes();

    return (
      <div>
        <header className="get-started-container animated fadeIn">
          <h1 className="get-started-title animated FadeIn">Set your rewards and shipping costs</h1>
          <h2 className="get-started-body">Invite backers to be a part of the
            creative experience by offering rewards like a copy of what you’re making,
            a special experience, or a behind-the-scenes look into your process.</h2>
        </header>
        <main className="new-project-container no-overflow">
          <form className="reward-form animated slideInLeft">
            {this.rewards}

            <div className="new-reward-button-container" onClick={() => {this.addReward(this.rewards.length + 1); } } >
              <i className="fa fa-plus"></i>
              <div className="new-reward-button-text">
                Add a new reward
              </div>
            </div>
          </form>

          <section className="project-current-summary animated fadeIn">
            <div className="helpful-tips-box">
              <i className="far fa-lightbulb" aria-hidden="true"></i>&nbsp;&nbsp;
                <div className="helpful-tips-box-content">
                  <h2 className="small-font">How to:</h2>
                  <br/>
                  <a className="link-text font-twelve" href="https://www.kickstarter.com/help/handbook/getting_started?ref=build_basics">Create great Rewards</a>
                </div>
              </div>

              <div className="text-left">
                <div className="basic-black">Need Advice?</div>
                <div className="project-form-explanations ">
                  Visit Campus to read discussions about preparing
                  for a project and more.
                </div>
              </div>

            </section>
        </main>
        {this.renderRewardSubmit()}
      </div>
    );
  }
}

export default rewardsTab;
