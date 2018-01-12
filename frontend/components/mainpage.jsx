import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Main extends React.Component {

  constructor (props) {
    super(props);

    this.state = {

    };

    this.displayProjects = this.displayProjects.bind(this);
    this.setDate = this.setDate.bind(this);
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

  percentFunded (cur, goal) {
    return Math.floor((cur/goal) * 100);
  }


  displayProjects () {
    let latestList;
    let latest;

    if (this.props.projects.length > 0) {
      let projects = Array.from(this.props.projects);
      projects = projects.reverse();
      this.projectCount = projects.length;
      latest = projects[0];

      latestList = projects.slice(1,5);

      latestList = latestList.map(project => {
        return (
          <ul key={project.id} className="mainpage-li-container">
            <Link to={`/projects/${project.id}`} className="mainpage-li-image-container">
              <img className="mainpage-li-image" src={project.image}/>
            </Link>
            <li>
              <Link className="mainpage-li-info" to={`/projects/${project.id}`}>{project.title}</Link>
              <h2 className="mainpage-li-funding-info">
                {this.percentFunded(project.current_funding, project.funding_goal)}% funded</h2>
            </li>
          </ul>
        );
      });
    } else {
      latest = <div></div>;
      latestList = [<div>Missing Projects</div>];
    }



    return (
      <main className="mainpage-projects-container">
        <div className="flexed">
          <section className="featured-project-container">
            <h2 className="mainpage-projects-header">Latest Project</h2>
              <Link to={`/projects/${latest.id}`} className="featured-image-container">
                <img className="featured-image" src={latest.image}></img>
                <div className="main-info-containers">
                  <div className="white-background featured-title">
                    <p>{latest.title}</p>
                  </div>
                  <br></br>

                  <div className="white-background featured-author">
                    <p>BY CREATOR #{latest.creator_id}</p>
                  </div>
                  <br></br>
                  <div className="white-background featured-author">
                    <p className="white-background featured-funded">
                    {this.percentFunded(latest.current_funding, latest.funding_goal)}% FUNDED
                    </p>
                  </div>
                </div>
              </Link>
          </section>
          <section className="category-tabs-container">
            <h2 className="mainpage-projects-header">Most Recent Projects</h2>
            {latestList}
          </section>
        </div>


      </main>
    );
  }

  displayInfo () {

    return (
      <nav className="Launchpad-info-container">
        <div className="Launchpad-info-nav">
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
            <div className="top-info bold">{this.projectCount}</div>
          </div>
          <div className="top-info-box-right">
            <div className="top-info-heading">Funded Projects</div>
            <div className="top-info bold">0</div>
          </div>
        </div>
      </nav>
    );
  }

  render () {

    return (
      <div>
        {this.displayInfo()}
        {this.displayProjects()}

      </div>
    );
  }
}

export default Main;
