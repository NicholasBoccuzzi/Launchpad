import React from 'react';

class projectCampaignRewardItem extends React.Component {
  constructor(props) {
    super(props);
    this.amount = props.reward.amount;
    this.title = props.reward.title;
    this.body = props.reward.body;
    this.delivery_date = props.reward.delivery_date;
    this.hoverActive = false;
  }



  render () {

    return (
      <a className="ps-reward-item-container">
        <div>Pledge ${this.amount}</div>
        <div>{this.title}</div>
        <div>{this.body}</div>
        <section>
          <div>Delivery Estimate</div>
          <div>{this.delivery_date}</div>
        </section>
      </a>
    );
  }
}

export default projectCampaignRewardItem;
