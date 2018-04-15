import React from 'react';

class rewardsPageReward extends React.Component {
  constructor(props) {
    super(props);
    this.first = props.first;
    this.loaded = false;
    this.expand = false;
    this.continueButton = false;
    this.expandBox = this.expandBox.bind(this);
    this.contractBox = this.contractBox.bind(this);
    this.animateExpansion = this.animateExpansion.bind(this);
    this.animateMakePledge = this.animateMakePledge.bind(this);
    this.openedContinue = this.openedContinue.bind(this);
    this.displayContinueButton = this.displayContinueButton.bind(this);
    this.checked = this.checked.bind(this);
    this.continueClick = this.continueClick.bind(this);
  }

  continueClick () {
    this.continueButton = true;
    this.props.updatePage();
  }

  animateExpansion () {
    if (this.expand) {
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
      return "check-circle green rp-margin-left";
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
      return "rp-grow-makepledge no-padding";
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
    if (this.continueButton) {
      return "";
    } else {
      return "hidden";
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
            <i className={`far fa-${this.checked()} rp-checked-space`}></i>
            <div className={`${this.animateMakePledge()}`}>Make a pledge without a reward</div>
          </section>
          <section className={`${this.displayContinueButton()}`}>

          </section>
        </main>
      );
    }
  }
}

export default rewardsPageReward;
