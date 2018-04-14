import React from 'react';
import RewardsPageReward from './rewards_page_reward_container';
import RewardsPageFaqLi from './rewards_page_faq_item';

class rewardsPage extends React.Component {
  constructor(props) {
    super(props);

    if (props.project) {
      this.project = props.project;
    } else {
      this.project;
    }

    if (this.project) {
      this.rewards = this.project.rewards;
    }
    this.displayRewards = this.displayRewards.bind(this);
    this.displayFaqs = this.displayFaqs.bind(this);
  }

  componentDidMount() {
    if (!this.props.project) {
      this.props.fetchProject(this.props.projectId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.project){
      this.project = nextProps.project;
      this.rewards = nextProps.project.rewards;
    }
  }

  displayRewards() {
    let rewards = [];
    if (this.project) {
      rewards.push(<RewardsPageReward first={true} />);
      this.project.rewards.forEach((reward) => {
        rewards.push(
          <RewardsPageReward first={false} />
        );
      });
      return rewards;
    } else {
      return <div></div>;
    }
  }

  displayFaqs() {
    let faqs = [];
    let strings = [
    "How do I pledge?",
    "When is my card charged?",
    "So I'm only charged if funding succeeds?",
    "What can others see about my pledge?",
    "What if I want to change my pledge?",
    "If this project is funded, how do I get my reward?"
  ];
    let text = "This is the answer to the question.";
    let idx = 0;

    while (faqs.length < 6) {
      let el = <RewardsPageFaqLi
        updatePage={this.props.updatePage}
        text={text}
        title={strings[idx]}
        />;
      idx+= 1;
      faqs.push(el);
    }

    return faqs;
  }

  render() {
    if (this.project) {
      return (
        <main className="rewards-page-container">
          <section className="rp-title-container">
            <h1 className="rp-title-title">{this.project.title}</h1>
            <h2 className="rp-title-author">by {this.project.user.username}</h2>
          </section>
          <main className="rp-rewards-main-container">
            <section className="rp-left-rewards-container">
              <h1 className="rp-lr-header">Support this project</h1>
              <ul className="rp-lr-rewards-ul">
                {this.displayRewards()}
              </ul>
            </section>
            <section className="rp-right-info-container">
              <div className="rp-right-info-marg">
                <h1 className="rp-ri-header">Launchpad is not a store</h1>
                <div className="rp-ri-text-med">It's a passion project to recreate Kickstarter</div>
                <div className="rp-ri-text-small">Launchpad projects are fake and therefore should not be expected to follow through on any of the rewards that are available. If you have any interest in making a project, may I recommend Kickstarter or one of the other crowdfunding websites.</div>
                <a className="rp-ri-accountability" href={"http://www.nicholasboccuzzi.com"}>Learn more about accountability</a>
              </div>
              <ul className="rp-ri-faq-container">
                <div className="rp-ri-faq-header">
                  Frequently Asked Questions
                </div>
                <section className="rp-ri-faqs">
                  {this.displayFaqs()}
                </section>
              </ul>
            </section>
          </main>
        </main>
      );
    } else {
      return (
        <main></main>
      );
    }
  }
}

export default rewardsPage;
