import React from 'react';

class createProjectCheckboxes extends React.Component {
  constructor(props) {
    super(props);
    this.renderAgeCheckbox = this.renderAgeCheckbox.bind(this);
    this.renderBankCheckbox = this.renderBankCheckbox.bind(this);
    this.renderCardCheckbox = this.renderCardCheckbox.bind(this);
  }

  renderAgeCheckbox () {
    if (this.props.updatedAge) {
      return(
        <div className="cp-checkbox-li flex-row cp-green-text" onClick={this.props.updateAge}>
          <i className="far fa-check-circle bigger-checkbox"></i>
          <div className="cp-black-text">I am at least 18 years old.</div>
        </div>
      );
    } else {
      return(
        <div className="cp-checkbox-li flex-row cp-black-text" onClick={this.props.updateAge}>
          <i class="far fa-check-circle bigger-checkbox"></i>
          <div className="cp-black-text">I am at least 18 years old.</div>
        </div>
      );
    }
  }

  renderBankCheckbox () {
    if (this.props.updatedBank) {
      return(
        <div className="cp-checkbox-li flex-row cp-green-text" onClick={this.props.updateBank}>
          <i className="far fa-check-circle bigger-checkbox"></i>
          <div className="cp-black-text">I can verify a bank account and government-issued ID.</div>
        </div>
      );
    } else {
      return(
        <div className="cp-checkbox-li flex-row cp-black-text" onClick={this.props.updateBank}>
          <i className="far fa-check-circle bigger-checkbox"></i>
          <div className="cp-black-text">I can verify a bank account and government-issued ID.</div>
        </div>
      );
    }
  }

  renderCardCheckbox () {
    if (this.props.updatedCard) {
      return(
        <div className="cp-checkbox-li flex-row cp-green-text" onClick={this.props.updateCard}>
          <i className="far fa-check-circle bigger-checkbox"></i>
          <div className="cp-black-text">I have a debit and/or credit card.</div>
        </div>
      );
    } else {
      return(
        <div className="cp-checkbox-li flex-row cp-black-text" onClick={this.props.updateCard}>
          <i className="far fa-check-circle bigger-checkbox"></i>
          <div className="cp-black-text">I have a debit and/or credit card.</div>
        </div>
      );
    }
  }



  render() {

    return (
      <div className="cp-checkboxes">
        {this.renderAgeCheckbox()}
        {this.renderBankCheckbox()}
        {this.renderCardCheckbox()}
      </div>
    );
  }
}

export default createProjectCheckboxes;
