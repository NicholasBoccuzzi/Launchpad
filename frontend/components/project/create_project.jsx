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
            <div className="cp-category-selection">
              <div>Art</div>
            </div>
            <div className="cp-category-selection">
              <div>Comics</div>
            </div>
            <div className="cp-category-selection">
              <div>Crafts</div>
            </div>
            <div className="cp-category-selection">
              <div>Dance</div>
            </div>
            <div className="cp-category-selection">
              <div>Design</div>
            </div>
            <div className="cp-category-selection">
              <div>Fashion</div>
            </div>
            <div className="cp-category-selection">
              <div>Film & Video</div>
            </div>
            <div className="cp-category-selection">
              <div>Food</div>
            </div>
            <div className="cp-category-selection">
              <div>Games</div>
            </div>
            <div className="cp-category-selection">
              <div>Journalism</div>
            </div>
            <div className="cp-category-selection">
              <div>Music</div>
            </div>
            <div className="cp-category-selection">
              <div>Photography</div>
            </div>
            <div className="cp-category-selection">
              <div>Publishing</div>
            </div>
            <div className="cp-category-selection">
              <div>Technology</div>
            </div>
            <div className="cp-category-selection">
              <div>Theater</div>
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
              <i class="fa fa-caret-down black cp-carrot"></i>
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
