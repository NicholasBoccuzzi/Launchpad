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
      category: "Art",
      location: "",
    };
    this.currentPage = 1;
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
            <div className="cp-page-category-choice">
              <div className="cp-page-category-choice-text">Select your category</div>
              <i class="fa fa-caret-down black cp-carrot"></i>
            </div>
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
