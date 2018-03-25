import React from 'react';

class RewardsTabItem extends React.Component {
  constructor (props) {
    super(props);
    this.rewardNumber = props.rewardNum;
    this.key = props.key;

    if (props.loaded === true) {
      this.exists = true;
    }

    this.state = {
      title: null,
      pledge: "1",
      description: null,
      estimatedDeliveryMonth: "January",
      estimatedDeliveryYear: "2018"
    };

    this.updateRewardState = this.updateRewardState.bind(this);
    this.props.rewardsState.push(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.rewardNum) {
      this.rewardNum = nextProps.rewardNum;
    }

  }

  updateRewardState(e, el) {
    if (!this.props.rewardsModalActive) {
      this.props.toggleRewardsModal();
    }

    this.setState({[el]: e.currentTarget.value});
  }


  render () {
    return (
      <div key={this.key} data={this.state} className="reward-form-input-box">
        <div className="reward-form-input-title-box">
          <h3 className="reward-form-input-title ">Reward #{this.rewardNumber}</h3>
        </div>
        <div className="flex-col">
          <div className="flexed-columns">
            <div className="project-rewards-info-container flexed-columns">
              <div className="flexed-rows reward-input-container">
                <div className="reward-input-title">Title</div>
                <input
                  onChange={(e) => {this.updateRewardState(e, "title");}}
                  className="reward-user-input">
                </input>
              </div>
              <div className="flexed-rows reward-input-container">
                <div className="reward-input-title">Pledge Amount</div>
                <input
                  onChange={(e) => {this.updateRewardState(e, "pledge");}}
                  className="reward-user-input"
                  placeholder="$1">
                </input>
              </div>
              <div className="flexed-rows reward-input-container">
                <div className="reward-input-title reward-description">Description</div>
                <textarea
                  onChange={(e) => {this.updateRewardState(e, "description");}}
                  className="reward-user-input textarea">
                </textarea>
              </div>
              <div className="flexed-rows reward-input-container no-bottom">
                <div className="reward-input-title">Estimated <br/> delivery</div>
                <div className="reward-month-select-container">
                  <select className="reward-month-year-select no-border"
                    onChange={(e) => {this.updateRewardState(e, "estimatedDeliveryMonth");}}>
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
                    onChange={(e) => {this.updateRewardState(e, "estimatedDeliveryYear");}}>
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
          <div id={this.rewardNumber} className="delete-reward" onClick={ (e) => {this.props.removeReward(e);} }>
            <i className="fa fa-times big-x"></i>
            <div>Delete</div>
          </div>
        </div>
      </div>
    );

  }
}

export default RewardsTabItem;
