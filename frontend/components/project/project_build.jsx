import React from 'react';

class projectBuild extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.projectId);
  }

  componentWillReceiveProps(nextProps) {

  }

  render () {
    return (
      <div>
        Hello
      </div>
    );
  }
}

export default projectBuild;
