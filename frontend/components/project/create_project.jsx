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
  }

  render () {

    return (
      <div>Hi</div>
    );
  }
}

export default createProjectForm;
