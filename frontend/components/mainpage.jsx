import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {

  constructor (props) {
    super(props);
  }

  setDate() {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    if (dd < 10){
        dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    return `${mm}/${dd}/${yyyy}`;
  }

  componentDidMount () {
    this.props.fetchProjects();
  }

  displayProject () {
  }

  displayInfo () {

    return (
      <nav className="Launchpad-info-container">
        <div className="top-info-box-left">
          <div className="top-info heading">{this.setDate()}</div>
          <div className="top-info bold">Sky is the limit.</div>
        </div>
        <div className="top-info-box">
          <div className="top-info heading">Total Backers</div>
          <div className="top-info bold">3</div>
        </div>
        <div className="top-info-box">
          <div className="top-info heading">Total Projects</div>
          <div className="top-info bold">3</div>
        </div>
        <div className="top-info-box-right">
          <div className="top-info-heading">Funded Projects</div>
          <div className="top-info bold">0</div>
        </div>
      </nav>
    );
  }

  render () {

    return (
      <div>
        {this.displayInfo()}
        (this.displayProject())

      </div>
    );
  }


}

export default Main;
