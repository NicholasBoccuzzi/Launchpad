import React from 'react';
import { Link } from 'react-router-dom';
import { Line, Circle } from 'rc-progress';

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
    };
    this.currentPage = 1;
    this.randomQuote = this.randomQuote.bind(this);
    this.displayCategoryChoices = this.displayCategoryChoices.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
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

  selectCategory(e) {
    let checkbox = `<i class="fa fa-check-circle green-checked"></i>`;
    debugger
    this.state.category = e.currentTarget.id;
    debugger
    this.props.toggleCategoryChoices();
  }

  categorySelected() {
    if (this.state.category) {
      return (
        <div onClick={this.props.switchTabs}
          className="cp-category-selected-button">
          <div className="centered">Next: Project Idea</div>
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

  displayCategoryChoices() {
    if (this.props.categoryChoicesActive) {
      return (
        <div className="cp-category-selection-container">
          <div className="cp-categories">
            <div className="cp-category-selection"
              onClick={this.selectCategory}
              id="Art">
              <div id="Art">Art</div>
            </div>
            <div className="cp-category-selection"
              onClick={this.selectCategory}
              id="Comics">
              <div id="Comics">Comics</div>
            </div>
            <div className="cp-category-selection"
              onClick={this.selectCategory}
              id="Crafts">
              <div id="Crafts">Crafts</div>
            </div>
            <div className="cp-category-selection"
              onClick={this.selectCategory}
              id="Dance">
              <div id="Dance">Dance</div>
            </div>
            <div className="cp-category-selection"
              onClick={this.selectCategory}
              id="Design">
              <div id="Design">Design</div>
            </div>
            <div className="cp-category-selection"
              onClick={this.selectCategory}
              id="Fashion">
              <div id="Fashion">Fashion</div>
            </div>
            <div className="cp-category-selection"
              onClick={this.selectCategory}
              id="Film & Video">
              <div id="Film & Video">Film & Video</div>
            </div>
            <div className="cp-category-selection"
              onClick={this.selectCategory}
              id="Food">
              <div id="Food">Food</div>
            </div>
            <div className="cp-category-selection"
              onClick={this.selectCategory}
              id="Games">
              <div id="Games">Games</div>
            </div>
            <div className="cp-category-selection"
              onClick={this.selectCategory}
              id="Journalism">
              <div id="Journalism">Journalism</div>
            </div>
            <div className="cp-category-selection"
              onClick={this.selectCategory}
              id="Music">
              <div id="Music">Music</div>
            </div>
            <div className="cp-category-selection"
              onClick={this.selectCategory}
              id="Photography">
              <div id="Photography">Photography</div>
            </div>
            <div className="cp-category-selection"
              id="Publishing">
              <div id="Publishing">Publishing</div>
            </div>
            <div className="cp-category-selection"
              id="Technology">
              <div id="Technology">Technology</div>
            </div>
            <div className="cp-category-selection"
              id="Theater">
              <div id="Theater">Theater</div>
            </div>
          </div>
        </div>
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
                Select your category
              </div>
              <i className="fa fa-caret-down black cp-carrot"></i>
            </div>
            {this.displayCategoryChoices()}
          </div>
        </div>
      );
    } else if (this.currentPage === 2) {

    } else {

    }
  }


  render () {

    return (
      <div>
        {this.displayCreateProjectForm()}
      </div>
    );
  }
}

export default createProjectForm;
