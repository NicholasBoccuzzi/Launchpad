import React from 'react';

class rewardsPageReward extends React.Component {
  constructor(props) {
    super(props);
    if (props.reward) {
      this.reward = props.reward;
      this.targetValue = props.reward.amount;
      this.id = props.reward.id;
      this.title = props.reward.title;
      this.description = props.reward.body;
      this.date = this.disectDate(props.reward.delivery_date);
      this.state = {
        currentPrice: props.reward.amount
      };
    } else {
      this.targetValue = 1;
      this.id = 0;
      this.state = {
        currentPrice: 1
      };
    }

    this.project = props.project;
    this.selected = props.selected;
    this.first = props.first;
    this.hoverBox = false;
    this.firstClick = false;
    this.loaded = false;
    this.expand = false;
    this.continueLoaded = false;
    this.continueButton = false;
    this.greenBorderActive = false;
    this.expandBox = this.expandBox.bind(this);
    this.contractBox = this.contractBox.bind(this);
    this.animateExpansion = this.animateExpansion.bind(this);
    this.animateMakePledge = this.animateMakePledge.bind(this);
    this.openedContinue = this.openedContinue.bind(this);
    this.displayContinueButton = this.displayContinueButton.bind(this);
    this.checked = this.checked.bind(this);
    this.continueClick = this.continueClick.bind(this);
    this.greenBorder = this.greenBorder.bind(this);
    this.toggleGreenBorder = this.toggleGreenBorder.bind(this);
    this.continueButtonClass = this.continueButtonClass.bind(this);
    this.continueButtonOpacity = this.continueButtonOpacity.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.overBox = this.overBox.bind(this);
    this.leaveBox = this.leaveBox.bind(this);
    this.reroute = this.reroute.bind(this);
    this.select = props.select;
    this.disectDate = this.disectDate.bind(this);
    this.calcMonth = this.calcMonth.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected) {
      this.selected = nextProps.selected;
    }

    if (nextProps.selected === this.id) {
      console.log("true");
      this.continueButton = true;
      this.loaded = true;
      this.firstClick = true;
    } else {
      this.continueButton = false;
    }
  }

  disectDate(date) {
    let month = date.slice(5,7);
    month = this.calcMonth(month);
    let year = date.slice(0, 4);

    return month + " " + year;
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

  updateInput(e) {
    this.continueLoaded = true;
    let numbers = "0123456789".split("");
    let updated = e.currentTarget.value.split("");

    if (updated.length === 0 || updated.every((number) => {
      return numbers.includes(number);
    })) {
      if (parseInt(e.currentTarget.value) >= 1) {
        this.setState({currentPrice: e.currentTarget.value});
      } else if (e.currentTarget.value.length === 0) {
        this.setState({currentPrice: ""});
      } else if (e.currentTarget.value === "0"){
        this.setState({currentPrice: 0});
      }
    }
  }

  continueClick () {
    this.continueButton = true;
    this.firstClick = true;
    this.props.updatePage();
  }

  toggleGreenBorder(e) {
    e.preventDefault();
    this.greenBorderActive = true;
  }

  overBox () {
    this.hoverBox = true;
    this.props.updatePage();
  }

  leaveBox () {
    this.hoverBox = false;
    this.props.updatePage();
  }

  greenBorder () {
    if (this.greenBorderActive) {
      return "rp-green-border";
    } else {
      return "";
    }
  }

  animateExpansion () {
    if (this.expand && this.continueButton) {
      return "rp-grow-reward rp-selected";
    } else if (this.expand){
      return "rp-grow-reward";
    } else if (this.loaded && !this.expand){
      return "rp-shrink-reward";
    } else {
      return "";
    }
  }

  openedContinue() {
    if (this.continueButton) {
      return "rp-reward-continue";
    } else {
      return "";
    }
  }

  checked() {
    if (this.continueButton) {
      return "check-circle rp-green rp-margin-left";
    } else if (this.expand && !this.continueButton) {
      return "circle rp-margin-left";
    } else if (this.loaded){
      return "circle rp-no-margin-left";
    } else {
      return "circle";
    }
  }

  animateMakePledge (string) {
    if (!string) {
      if (this.expand && !this.continueButton) {
        return "rp-grow-makepledge";
      } else if (this.continueButton){
        return "rp-grow-makepledge";
      } else if (this.loaded && !this.expand){
        return "rp-shrink-makepledge";
      } else {
        return "rp-makepledge";
      }
    } else if (string === "delivery") {
      if (this.expand && !this.continueButton) {
        return "rp-raise-del";
      } else if (this.continueButton){
        return "rp-raise-del";
      } else if (this.loaded && !this.expand){
        return "rp-low-del";
      } else {
        return "";
      }
    }
  }

  expandBox () {
    if (!this.continueButton) {
      this.loaded = true;
      this.expand = true;
      this.props.updatePage();
    }
  }

  contractBox () {
    if (this.loaded && !this.continueButton) {
      this.expand = false;
      this.props.updatePage();
    }
  }

  displayContinueButton () {
    if (this.continueButton && this.firstClick) {
      return "rp-open-continue";
    } else if (this.firstClick && !this.continueButton) {
      return "rp-close-continue";
    } else if (this.firstClick && this.continueButton) {
      return "rp-open-continue";
    } else {
      return "hidden";
    }
  }

  continueButtonClass () {
    if (this.hoverBox) {
      return "rp-continue-button-green rp-light-green";
    } else {
      return "rp-continue-button-green rp-dark-green";
    }
  }

  continueButtonOpacity () {
    if (this.continueLoaded === true && parseInt(this.state.currentPrice) >= this.targetValue) {
      return  "rp-opacity-out";
    } else if (this.continueLoaded === true && parseInt(this.state.currentPrice) < this.targetValue) {
      return  "rp-opacity-in";
    } else if (this.continueLoaded && this.state.currentPrice === ""){
      return "rp-opacity-in";
    } else {
      return "";
    }
  }

  reroute() {
    if (this.state.currentPrice >= this.targetValue && this.reward) {
      return `#/checkout?proj=${this.project}&amnt=${this.state.currentPrice}&rwrd=${this.reward.id}`;
    } else if (this.state.currentPrice >= this.targetValue) {
      return `#/checkout?proj=${this.project}&amnt=${this.state.currentPrice}`;
    } else {
      return `${window.location.hash}`;
    }
  }

  render () {
    if (!this.first) {
      return (
        <main
          onMouseOver={this.expandBox}
          onMouseLeave={this.contractBox}
          onClick={() => {this.select(this.id);}}
          className={`rp-reward-container ${this.animateExpansion()} ${this.openedContinue()}`}>
          <section className="rp-reward-inner-marg">
            <main className="rp-flex-row">
              <div className="rp-flex-row rp-half-width">
                <i className={`far fa-${this.checked()} rp-check`}></i>
                <section className="rp-flex-col">
                  <div className={`${this.animateMakePledge()}`}>${this.targetValue} or More</div>
                  <div className={`rp-reward-title ${this.animateMakePledge()}`}>{this.title}</div>
                  <div className={`rp-reward-desc ${this.animateMakePledge()}`}>{this.description}</div>
                </section>
              </div>
              <section className={`rp-flex-col rp-half-width ${this.animateMakePledge("delivery")}`}>
                <div className="rp-pledge-amount rp-light-weight">Estimated Delivery</div>
                <div className="rp-reward-delivery">{this.date}</div>
              </section>
            </main>
          </section>
          <section className={`${this.displayContinueButton()} rp-continue-width`}>
            <div className="rp-flex-col">
              <div className="rp-pledge-amount">Pledge Amount</div>
              <section className="rp-flex-row">
                <div className={`rp-pledge-container ${this.greenBorder()}`} onClick={this.toggleGreenBorder}>
                  <div className="rp-dollar"><div>$</div></div>
                  <input className="rp-input" value={this.state.currentPrice} onChange={this.updateInput}>
                  </input>
                </div>
                <a
                  href={`${this.reroute()}`}
                  onMouseOver={this.overBox}
                  onMouseLeave={this.leaveBox}
                  onClick={this.reroute}
                  className={`${this.continueButtonClass()}`}>
                  <div className={`${this.continueButtonOpacity()}`}>
                  </div>
                  <div>Continue</div>
                </a>
              </section>
            </div>
          </section>
        </main>
      );
    } else {
      return (
        <main
          onMouseOver={this.expandBox}
          onMouseLeave={this.contractBox}
          onClick={() => {this.select(this.id);}}
          className={`rp-reward-container ${this.animateExpansion()} ${this.openedContinue()}`}>
          <section className="rp-reward-inner-marg rp-flex-row">
            <i className={`far fa-${this.checked()} rp-check`}></i>
            <div className={`${this.animateMakePledge()}`}>Make a pledge without a reward</div>
          </section>
          <section className={`${this.displayContinueButton()} rp-continue-width`}>
            <div className="rp-flex-col">
              <div className="rp-pledge-amount">Pledge Amount</div>
              <section className="rp-flex-row">
                <div className={`rp-pledge-container ${this.greenBorder()}`} onClick={this.toggleGreenBorder}>
                  <div className="rp-dollar"><div>$</div></div>
                  <input className="rp-input" value={this.state.currentPrice} onChange={this.updateInput}>
                  </input>
                </div>
                <a
                  href={`${this.reroute()}`}
                  onMouseOver={this.overBox}
                  onMouseLeave={this.leaveBox}
                  onClick={this.reroute}
                  className={`${this.continueButtonClass()}`}>
                  <div className={`${this.continueButtonOpacity()}`}>
                  </div>
                  <div>Continue</div>
                </a>
              </section>
            </div>
          </section>
        </main>
      );
    }
  }
}

export default rewardsPageReward;
