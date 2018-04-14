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
    this.openContinue = this.openContinue.bind(this);
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

  openContinue() {

  }

  animateMakePledge () {
    if (this.expand) {
      return "rp-grow-makepledge";
    } else if (this.loaded && !this.expand){
      return "rp-shrink-makepledge";
    } else {
      return "rp-makepledge";
    }
  }

  expandBox () {
    this.loaded = true;
    this.expand = true;
    this.props.updatePage();
  }

  contractBox () {
    if (this.loaded && !this.continueButton) {
      this.expand = false;
      this.props.updatePage();
    }
  }

  continueButton() {
    this.continueButton = true;
  }

  render () {
    if (!this.first) {
      return (
        <main
          onMouseOver={this.expandBox}
          onMouseLeave={this.contractBox}
          className={`rp-reward-container ${this.animateExpansion()}`}>
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
          className={`rp-reward-container ${this.animateExpansion()}`}>
          <section className="rp-reward-inner-marg">
            <div className={`${this.animateMakePledge()}`}>Make a pledge without a reward</div>
          </section>
        </main>
      );
    }
  }
}

export default rewardsPageReward;
