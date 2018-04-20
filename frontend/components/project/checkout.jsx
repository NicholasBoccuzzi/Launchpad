import React from 'react';
import {LoadingScreen} from '../loading';

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.projectId = props.search[1].slice(5);
    this.amount = props.search[2].slice(5);
    if (props.search[3]) {
      this.rewardId = props.search[3].slice(5);
    }

    this.hoveredButton;
    this.filledIn = false;
    this.rewardBody = "No reward, I just want to support the project";
    this.currentUser = props.currentUser;
    this.hoverHelp = this.hoverHelp.bind(this);
    this.hoverTrue = this.hoverTrue.bind(this);
    this.hoverFalse = this.hoverFalse.bind(this);
    this.hover = "initial";
    this.displayPayment = this.displayPayment.bind(this);
    this.displayDetails = this.displayDetails.bind(this);
    this.displayPaymentBoxes = this.displayPaymentBoxes.bind(this);
    this.displayCardHolderName = this.displayCardHolderName.bind(this);
    this.displayExpiration = this.displayExpiration.bind(this);
    this.displayBackProject = this.displayBackProject.bind(this);
    this.checkboxClass = this.checkboxClass.bind(this);
    this.autofill = this.autofill.bind(this);
    this.fill = this.fill.bind(this);
    this.pledgeButtonColor = this.pledgeButtonColor.bind(this);
    this.darkerButton = this.darkerButton.bind(this);
    this.lighterButton = this.lighterButton.bind(this);
    this.createBacking = this.createBacking.bind(this);
  }

  componentDidMount () {
    this.props.fetchProject(this.projectId);
    window.scrollTo(0,0);

  }

  pledgeButtonColor () {
    if (this.hoveredButton === "on") {
      return "rp-light-green";
    } else if (this.hoveredButton === "off"){
      return "rp-dark-green";
    }
  }

  createBacking () {

    let project = {project: {id: this.projectId, additional_funds: this.amount}};
    let backing = `{amount: ${this.amount}, reward_id: ${this.rewardId}, user_id: ${this.currentUser.id}}`;

    this.props.updateProject(project, this.projectId);

    // if (this.reward) {
    //   this.props.createBacking(backing);
    // }
  }

  darkerButton () {
    this.hoveredButton = "on";
    this.props.updatePage();
  }

  lighterButton () {
    this.hoveredButton = "off";
    this.props.updatePage();
  }

  autofill() {
    if (!this.filledIn) {
      this.filledIn = true;
      let nameInput = document.getElementById("name");
      let monthInput = document.getElementById("month");
      let yearInput = document.getElementById("year");
      let numInput = document.getElementById("number");
      let codeInput = document.getElementById("code");
      let cardNum = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4];
      let name = ["D","e","m","o"," ","I","n","p","u","t"];
      let month = [1,2];
      let year = [2,1];
      let code = [1,0,0];

      this.fill(numInput, cardNum);
      this.fill(monthInput, month);
      this.fill(yearInput, year);
      this.fill(codeInput, code);
      this.fill(nameInput, name);

      this.props.updatePage();
    }
  }

  fill (input, list) {
    var index=0;
    var intObject = setInterval(function() {
      input.value += list[index];
      index++;
      if(index === list.length){
        clearInterval(intObject);
      }
    }, 100);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.project) {
      this.project = nextProps.project[this.projectId];
      if (this.rewardId) {

        this.reward = this.project.rewards.find((reward) => {
          return reward.id === parseInt(this.rewardId);
        });

        this.rewardBody = this.reward.body;
      }
    }
  }

  checkboxClass () {
    if (this.filledIn) {
      return "fas fa-check-square co-check-size";
    } else {
      return "fas fa-chek-square co-hidden";
    }
  }


  hoverTrue() {
    this.hover = true;
    this.props.updatePage();
  }

  hoverFalse() {
    this.hover = false;
    this.props.updatePage();
  }

  hoverHelp () {
    if (this.hover === true) {
      return "co-footer-opac co-to-opac";
    } else if (this.hover === false) {
      return "co-footer-opac co-from-opac";
    } else {
      return "co-footer-opac";
    }
  }

  displayExpiration() {
    return (
      <main className="co-payment-cont">
        <section className="co-flex-row">
          <div className="co-flex-col co-expir-cont">
            <div className="co-pay-header">Expiration</div>
            <section className="co-flex-row co-space-start">
              <input id="month" className="co-expir-box" placeholder={"MM"}></input>
              <input id="year" className="co-expir-box" placeholder={"YY"}></input>
            </section>
          </div>
          <div className="co-flex-col co-security-cont">
            <div className="co-pay-header">Security code</div>
            <input id="code"className="co-pay-input co-96perc" type="password" placeholder={"ex: 101"}></input>
          </div>
        </section>
      </main>
    );
  }

  displayPaymentBoxes () {
    return (
      <main className="co-payment-cont">
        <section className="co-cardnum-cont">
          <div className="co-flex-row co-justify-space">
            <div className="co-pay-header">Card number</div>
            <div className="co-flex-row co-justify-space">
              <i className="fab fa-cc-visa co-cc"></i>
              <i className="fab fa-cc-mastercard co-cc"></i>
              <i className="fab fa-cc-discover co-cc"></i>
              <i className="fab fa-cc-amex co-cc"></i>
              <i className="fab fa-cc-jcb co-cc"></i>
            </div>
          </div>
          <input id="number"className="co-pay-input" type="password" placeholder={"Card number"}></input>
        </section>
      </main>
    );
  }

  displayCardHolderName () {
    return (
      <main className="co-payment-cont">
        <section className="co-cardnum-cont">
          <div className="co-pay-header">Cardholder name</div>
          <input id="name" className="co-pay-input"></input>
        </section>
      </main>
    );
  }



  displayPayment () {
    return (
      <main className="co-payment-container">
        <section className="co-max-width co-media-padding co-pledge-mw">
          <div className="co-pledge-inner-marg">
            <div className="co-flex-row co-justify-space">
              <div className="co-pledge-header">
                Pledge
              </div>

              <a className="co-pledge-edit" href={`#/${this.projectId}/rewards`}>
                Edit
              </a>
            </div>
            <section className="co-current-pledge-container">
              <div className="co-cp-inner-marg co-flex-row co-space-start">
                <section className="co-flex-col co-max-120">
                  <div className="co-cur-pledge-head">Project</div>
                  <div className="co-cur-pledge-head">Pledge</div>
                  <div className="co-cur-pledge-head co-no-marg">Total Amount</div>
                </section>
                <section className="co-flex-col">
                  <div className="co-cur-pledge-head">{this.project.title}</div>
                  <div className="co-cur-pledge-head">${this.amount}.00 + {this.rewardBody}</div>
                  <div className="co-cur-pledge-head co-no-marg">${this.amount}.00</div>
                </section>
              </div>
            </section>
            {this.displayPaymentBoxes()}
            {this.displayCardHolderName()}
            {this.displayExpiration()}
            {this.displayBackProject()}
          </div>
        </section>
      </main>
    );
  }

  displayBackProject() {
    return (
      <main className="co-payment-cont">
        <section className="co-flex-row co-space-start co-align-center">
          <div className="co-small-checkbox" onClick={this.autofill}>
            <i className={`${this.checkboxClass()}`}></i>
          </div>
          <div className="co-click-text">Click here to autofill demo information</div>
        </section>
      </main>
    );
  }
  // <main className={`co-pledge-button ${this.pledgeButtonColor()}`}
  //   onMouseEnter={this.darkerButton} onMouseLeave={this.lighterButton} onClick={this.createBacking}>
  //   <div>Pledge</div>
  // </main>

  displayDetails () {

    return (
      <main className="co-detail-container co-media-twenty">
        <section className="co-max-width co-detail-mw">
          <div className="co-pay-info">
            Payment Information
          </div>
          <div className="co-pay-words">
            If your have any questions, you’ll may email Launchpad's creator at
          </div>
          <div className="co-pay-words co-black">Nicholas.R.Boccuzzi@gmail.com</div>
          <div className="co-pay-words co-detail-sm-marg co-marg-bot-border">
            Your payment method will not be charged at this time. If the project is successfully funded, your payment method will be charged $10.00 when the project ends.
          </div>
          <div className="co-pay-words co-disclaimer">
            <div className="co-launchpad">Launchpad is not a store</div>
            It’s a replica website of popular crowdfunding website, Kickstarter. This is a passion project to showcase my skills as a full stack developer. Given a clear vision, I can create both the backend and frontend design of a web app.
          </div>
        </section>
      </main>
    );
  }


  render () {
    if (this.project) {
      return (
        <main className="co-max-width">
          <section className="co-main-container">
            {this.displayPayment()}
            {this.displayDetails()}
          </section>
          <section className="co-footer-cont">
            <div className="co-flex-row pos-rel">
              <a href="http://www.nicholasboccuzzi.com"
                className={`co-help-button pos-rel`}>
                Help
                <div className={`${this.hoverHelp()}`}
                  onMouseOver={this.hoverTrue}
                  onMouseLeave={this.hoverFalse}>
                </div>
              </a>
              <i className="far fa-copyright co-copyright"></i>
              <div className="co-copyright-title">2018 Launchpad.com</div>
            </div>
          </section>
        </main>
      );
    } else {
      return <LoadingScreen />;
    }
  }
}

export default CheckoutPage;
