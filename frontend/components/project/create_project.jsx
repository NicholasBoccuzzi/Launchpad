import React from 'react';
import { Link } from 'react-router-dom';
import { Line, Circle } from 'rc-progress';
import CreateProjectCheckboxes from './create_project_checkboxes_container';

class createProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creator_id: this.props.currentUser.id,
      title: "",
      summary: "",
      body: "",
      deadline: "",
      category: "",
      location: "",
      bankVerified: false,
      ageVerified: false,
      cardVerified: false
    };


    this.checkboxesLoaded = false;
    this.currentPage = 1;
    this.randomQuote = this.randomQuote.bind(this);
    this.displayCategoryChoices = this.displayCategoryChoices.bind(this);
    this.displayCurrentCategory = this.displayCurrentCategory.bind(this);
    this.displayCurrentCountry = this.displayCurrentCountry.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.displayNextTab = this.displayNextTab.bind(this);
    this.updateSummary = this.updateSummary.bind(this);
    this.summaryWritten = this.summaryWritten.bind(this);
    this.displayPreviousTab = this.displayPreviousTab.bind(this);
    this.displayCheckboxes = this.displayCheckboxes.bind(this);
  }


  hitTheLimit() {
    if (this.state.summary.length === 135) {
      return (
        "You've hit the limit."
      );
    } else {
      return (
        ""
      );
    }
  }

  randomQuote () {
    let choice = Math.floor(Math.random()*3);
    let quotes = [
      "Welcome back.",
        "You're back. This is major.",
        "Hello, Super Creator."
    ];

    return quotes[choice];
  }

  randomSummary() {
    let choice = Math.floor(Math.random()*3);
    let quotes = [
      "A documentary about the history of shoes.",
      "A short claymation about boba.",
      "A novel written in three languages.",
      "A set of handmade greeting cards and stationary.",
      "An album of songs based on Pablo Neruda poems."

    ];

    return quotes[choice];
  }

  selectCategory(e) {
    this.state.category = e.currentTarget.id;
    this.props.toggleCategoryChoices();
  }

  selectCountry(e) {
    this.state.location = e.currentTarget.id;
    this.props.toggleCountryChoices();
  }

  updateSummary(e) {
    this.state.summary = e.currentTarget.value;
    this.props.updatePage();
  }

  displayNextTab() {
    this.currentPage += 1;
    this.props.switchTabs();
  }

  displayPreviousTab() {
    this.currentPage -= 1;
    this.props.switchTabs();
  }

  categorySelected() {
    if (this.state.category) {
      return (
        <div onClick={this.displayNextTab}
          className="cp-category-selected-button">
          <div className="center-project-button">Next: Project Idea</div>
        </div>
      );
    } else {
      return (
        <div className="cp-category-selected-button not-selected">
          <div className="center-project-button">Next: Project Idea</div>
        </div>
      );
    }
  }

  summaryWritten() {
    if (this.state.summary) {
      return (
        <div onClick={this.displayNextTab}
          className="cp-summary-selected-button">
          <div className="center-project-button">Next: Location</div>
        </div>
      );
    } else {
      return (
        <div className="cp-summary-selected-button not-selected">
          <div className="center-project-button">Next: Location</div>
        </div>
      );
    }
  }

  countrySelected() {
    if (this.state.location && this.props.updatedAge && this.props.updatedBank && this.props.updatedCard) {
      let project = {project: {
        category: this.state.category,
        summary: this.state.summary,
        location: this.state.location,
        creator_id: this.props.currentUser.id
        }
      };

      return (
        <div onClick={() => { this.props.createProject(project); } }
          className="cp-country-selected-button">
          <div className="center-project-button">Continue</div>
        </div>
      );
    } else {
      return (
        <div className="cp-country-selected-button not-selected">
          <div className="center-project-button">Continue</div>
        </div>
      );
    }
  }

  addGreenCheckbox() {
    if (this.props.categoryChoicesActive && this.state.category) {
      let element = document.getElementById(this.state.category);
    }
  }

  displayCurrentCategory() {
    if (this.state.category) {
      return this.state.category;
    } else {
      return "Select your category";
    }
  }

  displayCurrentCountry() {
    if (this.state.location) {
      return this.state.location;
    } else {
      return "Select your country";
    }
  }

  displayCountryChoices() {
    if (this.props.countryChoicesActive) {
      return (
        <main className="cp-selection-container">
          <section className="cp-categories">
            <div className="cp-selection" onClick={this.selectCountry} id="Australia">
              <div id="Australia">Australia</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="Austria">
              <div id="Austria">Austria</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="Belgium">
              <div id="Belgium">Belgium</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="Canada">
              <div id="Canada">Canada</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="Denmark">
              <div id="Denmark">Denmark</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="France">
              <div id="France">France</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="Germany">
              <div id="Germany">Germany</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="Hong Kong">
              <div id="Hong Kong">Hong Kong</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="Ireland">
              <div id="Ireland">Ireland</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="Italy">
              <div id="Italy">Italy</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="Japan">
              <div id="Japan">Japan</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="Luxembourg">
              <div id="Luxembourg">Luxembourg</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="Mexico">
              <div id="Mexico">Mexico</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="New Zealand">
              <div id="New Zealand">New Zealand</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="Norway">
              <div id="Norway">Norway</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="Singapore">
              <div id="Singapore">Singapore</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="Spain">
              <div id="Spain">Spain</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="Sweden">
              <div id="Sweden">Sweden</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="Switzerland">
              <div id="Switzerland">Switzerland</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="the Netherlands">
              <div id="the Netherlands">the Netherlands</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="the United Kingdom">
              <div id="the United Kingdom">the United Kingdom</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCountry}
              id="the United States">
              <div id="the United States">the United States</div>
            </div>
          </section>
        </main>
      );
    }
  }

  displayCheckboxes () {
    if (this.checkboxesLoaded === false) {
      this.props.updatePage();
    }
    this.checkboxesLoaded = true;

    if (!this.props.countryChoicesActive) {
      return (
        <main>
          <div className="cp-country-question-container" >
            <i className="far fa-question-circle question-mark-margin"></i>
            <div>What if my country is not listed?</div>
          </div>
          <CreateProjectCheckboxes />
          <div className="cp-country-submit">
            <div className="cp-country-button-container flex-row">
              <div className="cp-previous-tab flex-row" onClick={this.displayPreviousTab}>
                <i className="fas fa-long-arrow-alt-left"></i>
                &nbsp;
                <div className="cp-previous-idea">Project Idea</div>
              </div>
              <div className="cp-button-space">
              </div>
              {this.countrySelected()}
            </div>
          </div>
        </main>
      );
    }
  }

  displayCategoryChoices() {
    if (this.props.categoryChoicesActive) {
      return (
        <main className="cp-selection-container">
          <section className="cp-categories">
            <div className="cp-selection"
              onClick={this.selectCategory}
              id="Art">
              <div id="Art">Art</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCategory}
              id="Comics">
              <div id="Comics">Comics</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCategory}
              id="Crafts">
              <div id="Crafts">Crafts</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCategory}
              id="Dance">
              <div id="Dance">Dance</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCategory}
              id="Design">
              <div id="Design">Design</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCategory}
              id="Fashion">
              <div id="Fashion">Fashion</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCategory}
              id="Film & Video">
              <div id="Film & Video">Film & Video</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCategory}
              id="Food">
              <div id="Food">Food</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCategory}
              id="Games">
              <div id="Games">Games</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCategory}
              id="Journalism">
              <div id="Journalism">Journalism</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCategory}
              id="Music">
              <div id="Music">Music</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCategory}
              id="Photography">
              <div id="Photography">Photography</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCategory}
              id="Publishing">
              <div id="Publishing">Publishing</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCategory}
              id="Technology">
              <div id="Technology">Technology</div>
            </div>
            <div className="cp-selection"
              onClick={this.selectCategory}
              id="Theater">
              <div id="Theater">Theater</div>
            </div>
          </section>
        </main>
      );
    } else {
      return (
        <div className="cp-category-submit flex-row">
          <div className="cp-category-quotes">
            {this.randomQuote()}
          </div>
          <div className="cp-category-button-container">
            {this.categorySelected()}
          </div>
        </div>
      );
    }
  }

  displayCreateProjectForm () {
    if (this.currentPage === 1) {

      return(
        <div className="flex-col">
          <div className="cp-page-count">
            1 of 3
          </div>
          <div className="cp-page-container">
            <div className="cp-page-title">
              First, let’s get you set up.
            </div>
            <div className="cp-page-description">
              Pick a project category to connect with a specific community. You can always update this later.
            </div>
            <div className="cp-page-category-choice" onClick={this.props.toggleCategoryChoices}>
              <div
                id="cp-selection"
                className="cp-page-category-choice-text">
                {this.displayCurrentCategory()}
              </div>
              <i className="fa fa-caret-down black cp-carrot"></i>
            </div>
            {this.displayCategoryChoices()}
          </div>
        </div>
      );
    } else if (this.currentPage === 2) {

      return (
        <div className="flex-col">
          <div className="cp-page-count">
            2 of 3
          </div>
          <div className="cp-page-container">
            <div className="cp-page-title">
              Describe what you’ll be creating.
            </div>
            <div className="cp-page-description">
              And don’t worry, you can edit this later, too.
            </div>
            <textarea
              maxLength="135"
              placeholder={this.randomSummary()}
              className="cp-textarea"
              onChange={this.updateSummary}>
            </textarea>
            <div className="cp-character-count-container" >
              <div className="hit-the-limit">
                {this.hitTheLimit()}
              </div>
              <div className="cp-character-count">
                {this.state.summary.length}/135
              </div>
            </div>
            <div className="cp-summary-submit flex-row">
              <div className="cp-summary-button-container flex-row">
                <div className="cp-previous-tab flex-row" onClick={this.displayPreviousTab}>
                  <i className="fas fa-long-arrow-alt-left"></i>
                  &nbsp;
                  <div>Category</div>
                </div>
                <div className="cp-button-space"></div>
                {this.summaryWritten()}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.currentPage === 3) {

      return(
        <div className="flex-col">
          <div className="cp-page-count">
            3 of 3
          </div>
          <div className="cp-page-container">
            <div className="cp-page-title smaller-top-margin">
              Finally, let’s confirm your eligibility.
            </div>
            <div className="cp-page-description">
              Tell us where you’re based and confirm a few other details before we proceed.
            </div>
            <div className="cp-page-category-choice"
              onClick={this.props.toggleCountryChoices}>
              <div
                id="cp-selection"
                className="cp-page-category-choice-text">
                {this.displayCurrentCountry()}
              </div>
              <i className="fa fa-caret-down black cp-carrot"></i>
            </div>

            {this.displayCountryChoices()}
            {this.displayCheckboxes()}
          </div>
        </div>
      );
    } else {
      this.currentPage = 3;
      this.props.switchTabs();
    }
  }

  render () {
    return (
      <div className="cp-biggest-box">
        {this.displayCreateProjectForm()}
      </div>
    );
  }
}

export default createProjectForm;
