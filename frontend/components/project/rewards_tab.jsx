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
          <form className="reward-form animated slideInLeft">
            <div className="reward-form-input-box">
              <div className="reward-form-input-title-box">
                <h3 className="reward-form-input-title">Reward #{this.currentRewardCount}</h3>
              </div>
              <div className="flex-col">
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
                    <div className="flexed-rows reward-input-container">
                      <div className="reward-input-title">Estimated <br/> delivery</div>
                      <div className="reward-month-select-container">
                        <select className="reward-month-year-select no-border"
                          onChange={""}>
                          <option value="January">January</option>
                          <option value="February">February</option>
                          <option value="March">March</option>
                          <option value="April">April</option>
                          <option value="May">May</option>
                          <option value="June">June</option>
                          <option value="July">July</option>
                          <option value="August">August</option>
                          <option value="September">September</option>
                          <option value="October">October</option>
                          <option value="November">November</option>
                          <option value="December">December</option>
                        </select>
                      </div>
                      <div className="reward-month-select-container">
                        <select className="reward-month-year-select year-width no-border"
                          onChange={""}>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="delete-reward">
                  <i className="fa fa-times big-x"></i>
                  <div>Delete</div>
                </div>
              </div>
            </div>

            <div className="new-reward-button-container">
              <i className="fa fa-plus"></i>
              <div className="new-reward-button-text">
                Add a new reward
              </div>
            </div>

          </form>
          <section className="project-current-summary animated fadeIn">
            <div className="helpful-tips-box">
              <i className="fa fa-lightbulb-o" aria-hidden="true"></i>&nbsp;&nbsp;
                <div className="helpful-tips-box-content">
                  <h2 className="small-font">How to:</h2>
                  <br/>
                  <a className="link-text" href="https://www.kickstarter.com/help/handbook/getting_started?ref=build_basics">Create great Rewards</a>
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
      </div>
    );
  }
}

export default rewardsTab;
