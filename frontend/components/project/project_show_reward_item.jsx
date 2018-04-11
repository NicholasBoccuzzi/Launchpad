import React from 'react';

class projectCampaignRewardItem extends React.Component {
  constructor(props) {
    super(props);
    this.amount = props.reward.amount;
    this.title = props.reward.title;
    this.body = props.reward.body;
    this.selected = false;
    this.projectId = props.projectId;
    this.amount = props.reward.amount;
    this.state = {
      currentAmount: this.amount
    };
    this.includes = props.reward.includes;
    this.delivery_date = this.disectDate(props.reward.delivery_date);
    this.hoverActive = false;
    this.displayIncludes = this.displayIncludes.bind(this);
    this.disectDate = this.disectDate.bind(this);
    this.calcMonth = this.calcMonth.bind(this);
    this.classIfSelected = this.classIfSelected.bind(this);
    this.activateSelected = this.activateSelected.bind(this);
    this.displaySelectedReward = this.displaySelectedReward.bind(this);
    this.amountHighEnough = this.amountHighEnough.bind(this);
    this.updateCurrentAmount = this.updateCurrentAmount.bind(this);
    this.provideUrl = this.provideUrl.bind(this);
  }

  displayIncludes() {
    if (this.includes) {
      return (
        <div className="ps-ri-includes-list">
          <div className="ps-ri-little-header">
            INCLUDES:
          </div>
        </div>
      );
    }
  }

  classIfSelected(el) {
    if (this.selected && el === "hide") {
      return "hide";
    }
  }

  amountHighEnough () {
    if (this.state.currentAmount > this.amount) {
      return "ps-reward-continue-box";
    } else {
      return "ps-reward-continue-box grey-box";
    }
  }

  activateSelected () {
    this.selected = true;
    this.props.updatePage();
  }

  disectDate(date) {
    let month = date.slice(5,7);
    month = this.calcMonth(month);
    let year = date.slice(0, 4);

    return month + " " + year;
  }

  updateCurrentAmount(e) {
    this.setState({currentAmount: parseInt(e.currentTarget.value)});
    this.props.updatePage();
    console.log(this.state.currentAmount);
  }

  provideUrl () {
    if (this.state.currentAmount >= this.amount) {
      return `#/p`
    }
  }

  displaySelectedReward() {
    if (this.selected) {
      return(
        <main className="ps-reward-selected-cont">
          <div className="ps-ri-little-header bold">PLEDGE AMOUNT</div>
          <div className={`ps-reward-selected-input-cont ${this.classIfSelected("green")}`}>
            <div className="ps-reward-selected-dollar">$</div>
            <input className="ps-reward-selected-input"
              onChange={this.updateCurrentAmount}
              value={this.state.currentAmount}
              placeholder={this.amount}></input>
          </div>
          <a className={this.amountHighEnough()} href={`${this.provideUrl()}`}>
            Continue
          </a>
        </main>
      );
    }
  }

  calcMonth (month) {
    if (month === '01') {
      return "Jan";
    } else if (month === '02') {
      return "Feb";
    } else if (month === '03') {
      return "Mar";
    } else if (month === '04') {
      return "Apr";
    } else if (month === '05') {
      return "May";
    } else if (month === '06') {
      return "Jun";
    } else if (month === '07') {
      return "Jul";
    } else if (month === '08') {
      return "Aug";
    } else if (month === '09') {
      return "Sep";
    } else if (month === '10') {
      return "Oct";
    } else if (month === '11') {
      return "Nov";
    } else if (month === '12') {
      return "Dec";
    }
  }


  render () {
    return (
      <a className="ps-reward-item-container">
        <section onClick={this.activateSelected} className={`ps-reward-hover ${this.classIfSelected("hide")}`}>
          <div className="ps-select-reward-text">Select this reward</div>
        </section>
        <section className="ps-ri-inner-marg">
          <div className="ps-ri-pledge">Pledge ${this.amount} or more</div>
          <div className="ps-ri-title">{this.title}</div>
          <div className="ps-ri-body">{this.body}</div>
          {this.displayIncludes()}
          <section className="ps-ri-delivery-cont">
            <div className="ps-ri-little-header">
              ESTIMATED DELIVERY
            </div>
            <div className="ps-ri-delivery-text">{this.delivery_date}</div>
          </section>
          {this.displaySelectedReward()}
        </section>
      </a>
    );
  }
}

export default projectCampaignRewardItem;
