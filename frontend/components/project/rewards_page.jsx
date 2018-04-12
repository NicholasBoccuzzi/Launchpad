import React from 'react';

class rewardsPage extends React.Component {
  constructor(props) {
    super(props);

    if (props.project) {
      this.project = props.project;
    } else {
      this.project;
    }

    if (this.project) {
      this.rewards = this.project.rewards;
    }
  }

  componentDidMount() {
    if (!this.props.project) {
      this.props.fetchProject(this.props.projectId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.project){
      this.project = nextProps.project;
      this.rewards = nextProps.project.rewards;
    }
  }

  render() {
    if (this.project) {
      return (
        <main className="rewards-page-container">
          <section className="rp-title-container">
            <h1 className="rp-title-title">{this.project.title}</h1>
            <h2 className="rp-title-author">by {this.project.creator_id}</h2>
          </section>

        </main>
      );
    } else {
      return (
        <main></main>
      );
    }
  }
}

export default rewardsPage;
