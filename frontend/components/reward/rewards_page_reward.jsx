import React from 'react';

class rewardsPageReward extends React.Component {
  constructor(props) {
    super(props);
    if (props.targetValue) {
      this.targetValue = props.targetValue;
    } else {
      this.targetValue = 1;
    }
    this.first = props.first;
    this.state = {
      currentPrice: 1
    };
    this.firstClick = false;
    this.loaded = false;
    this.expand = false;
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
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    e.preventDefault();
    let numbers = "0123456789".split("");
    let updated = e.currentTarget.value.split("");
    console.log(updated);

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

  animateMakePledge () {
    if (this.expand && !this.continueButton) {
      return "rp-grow-makepledge";
    } else if (this.continueButton){
      return "rp-grow-makepledge";
    } else if (this.loaded && !this.expand){
      return "rp-shrink-makepledge";
    } else {
      return "rp-makepledge";
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
    if (this.continueLoaded === true && parseInt(this.state.currentTarget) >= this.targetValue) {
      return (
        "rp-continue-button-green"
      );
    } else if (parseInt(this.state.currentTarget >= this.targetValue)) {
      return (
        "rp-continue-button-green"
      );
    } else {
      return (
        "rp-continue-button-green rp-greyed-out"
      );
    }
  }

  render () {
    if (!this.first) {
      return (
        <main
          onMouseOver={this.expandBox}
          onMouseLeave={this.contractBox}
          onClick={this.continueClick}
          className={`rp-reward-container ${this.animateExpansion()} ${this.openedContinue()}`}>
          <section className="rp-reward-inner-marg">
            <div className="rp-reward-title"></div>
            <div className="rp-reward-description"></div>
            <div className="rp-reward-delivery"></div>
          </section>
        </main>
      );
    } else {
      return (
        <main
          onMouseOver={this.expandBox}
          onMouseLeave={this.contractBox}
          onClick={this.continueClick}
          className={`rp-reward-container ${this.animateExpansion()} ${this.openedContinue()}`}>
          <section className="rp-reward-inner-marg rp-flex-row">
            <i className={`far fa-${this.checked()} rp-check`}></i>
            <div className={`${this.animateMakePledge()}`}>Make a pledge without a reward</div>
          </section>
          <section className={`${this.displayContinueButton()}`}>
            <div className="rp-flex-col">
              <div className="rp-pledge-amount">Pledge Amount</div>
              <div className={`rp-pledge-container ${this.greenBorder()}`} onClick={this.toggleGreenBorder}>
                <div className="rp-dollar"><div>$</div></div>
                <input className="rp-input" value={this.state.currentPrice} onChange={this.updateInput}>
                </input>
                <div className={`${this.continueButtonClass()}`}></div>
              </div>
            </div>
          </section>
        </main>
      );
    }
  }
}

export default rewardsPageReward;
