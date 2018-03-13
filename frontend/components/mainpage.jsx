import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Main extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
    };

    this.displayInfo = this.displayInfo.bind(this);
    this.displayProjects = this.displayProjects.bind(this);
    this.setDate = this.setDate.bind(this);
    this.displayProjectsInfo = this.displayProjectsInfo.bind(this);
    this.calcMonth = this.calcMonth.bind(this);
  }

  setDate() {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    if (dd < 10){
        dd = '0' + dd;
    }

    mm = this.calcMonth(mm);

    return `${mm} ${dd}, ${yyyy}`;
  }

  calcMonth (month) {
    if (month === 1) {
      return "January";
    } else if (month === 2) {
      return "February";
    } else if (month === 3) {
      return "March";
    } else if (month === 4) {
      return "April";
    } else if (month === 5) {
      return "May";
    } else if (month === 6) {
      return "June";
    } else if (month === 7) {
      return "July";
    } else if (month === 8) {
      return "August";
    } else if (month === 9) {
      return "September";
    } else if (month === 10) {
      return "October";
    } else if (month === 11) {
      return "November";
    } else if (month === 12) {
      return "December";
    }
  }

  componentDidMount () {
    this.props.fetchProjects();
  }

  componentWillUnmount () {
  }

  componentWillReceiveProps(nextProps) {
    this.loaded = true;
  }

  percentFunded (cur, goal) {
    return Math.floor((cur/goal) * 100);
  }


  displayProjects () {
    let latestList;
    let latest;
    let latestCount = 0;

    if (this.props.projects.length > 0 && this.loaded === true) {
      let projects = Array.from(this.props.projects);
      let liveProjects = [];
      let that = this;
      projects.forEach(project => {
        if (project.live) {
          liveProjects.push(project);
        }
      });

      let reversedProjects = [];
      for (var i = liveProjects.length - 1; i >= 0; i--) {
        if (latestCount === 0) {
          latest = liveProjects[i];

        }
          latestCount += 1;
          reversedProjects.push(liveProjects[i]);
      }

      if (latestCount > 5) {
        latestList = reversedProjects.slice(1,5);
      } else {
        latestList = reversedProjects.slice(1, latestCount);
      }

      latestList = latestList.map(project => {

        return (
          <ul key={project.id} className="mainpage-li-container">
            <Link to={`/projects/${project.id}`} className="mainpage-li-image-container">
              <img className="mainpage-li-image" src={project.image}/>
            </Link>
            <li className="mainpage-li-info-margin">
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
            <h2 className="mainpage-projects-header ten-px-bottom">Latest Project</h2>
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
            <h2 className="mainpage-projects-header">New & Noteworthy</h2>
            {latestList}
          </section>
        </div>


      </main>
    );
  }

  displayProjectsInfo() {
    let projects = {
      funded: 0,
      total: 0,
    };

    this.props.projects.forEach((project) => {
      projects.total += 1;

      if (project.funded) {
        projects.funded += 1;
      }

    });

    return projects;
  }

  displayInfo () {
    let projectsInfo = this.displayProjectsInfo();


    return (
      <nav className="Launchpad-info-container">
        <div className="Launchpad-info-nav">
          <div className="top-info-box-left">
            <div className="top-info mp-heading">{this.setDate()}</div>
            <div className="top-info bold">Sky is the limit.</div>
          </div>
          <div className="top-info-box">
            <div className="top-info mp-heading">Total Backers</div>
            <div className="top-info bold">3</div>
          </div>
          <div className="top-info-box">
            <div className="top-info mp-heading">Total Projects</div>
            <div className="top-info bold">{projectsInfo.total}</div>
          </div>
          <div className="top-info-box-right">
            <div className="top-info mp-heading">Funded Projects</div>
            <div className="top-info bold">{projectsInfo.funded}</div>
          </div>
        </div>
      </nav>
    );
  }

  render () {

    if (this.loaded === true) {
      return (
        <main className="animated fadeIn">
          {this.displayInfo()}
          <div className="mainpage-centered-content">
            {this.displayProjects()}
          </div>
          <section className="mainpage-recommended-content">
            <div className="mainpage-recommended-title">
              Recommended For You
            </div>
            <div className="mainpage-project-list">

            </div>
          </section>

        </main>
      );
    } else {
      return (
        <main>
          <section className="loading-screen">
            <div className="loading-container">
              <div className="loading-rocket-fire">
                <div className="loading-rocket">
                  <i className="fas fa-rocket"
                    data-fa-transform="rotate-315"></i>
                </div>
                <div className="loading-fire">
                  <i className="fab fa-gripfire"
                    data-fa-transform="rotate-180"></i>
                </div>
              </div>
            </div>
          </section>
          <section className="loading-screen-whitespace">

          </section>
        </main>
      );
    }
  }
}

export default Main;
