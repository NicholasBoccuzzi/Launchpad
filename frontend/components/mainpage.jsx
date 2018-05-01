import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { LoadingScreen } from './loading';

class Main extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
    };

    this.displayInfo = this.displayInfo.bind(this);
    this.displayProjects = this.displayProjects.bind(this);
    this.setDate = this.setDate.bind(this);
    this.displayProjectsInfo = this.displayProjectsInfo.bind(this);
    this.displayCatButtons = this.displayCatButtons.bind(this);
    this.calcMonth = this.calcMonth.bind(this);
    this.currentFeatured = "Food & Craft";
    this.switchCat = this.switchCat.bind(this);
    this.displayRandomProjects = this.displayRandomProjects.bind(this);
    this.displayKSQuote = this.displayKSQuote.bind(this);
    this.displayContact = this.displayContact.bind(this);
    this.displayFeatured = this.displayFeatured.bind(this);
    this.dateMath = this.dateMath.bind(this);
    this.currentFeaturedSearch = this.currentFeaturedSearch.bind(this);
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

  dateMath(project) {
    if (project.live === true) {
      return true;
    }
  }

  currentFeaturedSearch() {
    if (this.currentFeatured === "Food & Craft") {
      return "Food";
    } else if (this.currentFeatured === "Arts") {
      return "Art";
    } else if (this.currentFeatured === "Design & Tech") {
      return "Tech";
    } else if (this.currentFeatured === "Comics & Illustration") {
      return "Comics";
    } else if (this.currentFeatured === "Film") {
      return "Film+Video";
    } else {
      return this.currentFeatured;
    }
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
    window.scrollTo(0, 0);
    this.props.fetchProjects();
  }

  componentWillUnmount () {
  }

  switchCat(e) {
    this.currentFeatured = e.currentTarget.id;
    this.props.updatePage();
  }

  componentWillReceiveProps(nextProps) {
    this.loaded = true;
  }

  displayKSQuote () {
    return (
      <main className="mp-quote">
        <i className="fas fa-bullseye mp-quote-logo"></i>
        <section className="flex-col">
          <div className="mp-quote-text">
            "If you are doing what you love then you're doing what is right...
            It's that passion that will fuel the fire to overcome challenges."
          </div>
          <div className="mp-quote-by">
            <div className="mp-quote-by">FORMER PROFESSIONAL SURFER & WORLD CHAMPION LAYNE BEACHLEY IN &nbsp;</div>
            <a className="mp-quote-readmore" href="http://www.azquotes.com/author/26499-Layne_Beachley">AZ QUOTES</a>
          </div>
          <a href="http://www.azquotes.com/author/26499-Layne_Beachley" className="flex-row mp-quote-readmore mp-rec-margtop">
            <div>READ MORE &nbsp;</div>
            <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </section>
      </main>
    );
  }

  percentFunded (cur, goal) {
    return Math.floor((cur/goal) * 100);
  }

  displayRandomProjects() {
    if (this.props.projects) {
      let randomNums = [];

      while (randomNums.length < 4) {
        let num = Math.floor(Math.random() * this.props.projects.length);

        if (!randomNums.includes(num)) {
          randomNums.push(num);
        }
      }

      let result = randomNums.map((num, i) => {
        let project = this.props.projects[num];

        if (i === 0) {
          return (
            <a href={`#/projects/${project.id}`} className="mp-rec-proj-container mp-rec-margleft">
              <img className="mp-rec-proj-img" src={project.image}></img>
              <div className="mp-rec-proj-bod">
                {project.body}
              </div>
              <div className="mp-rec-proj-percent">
                {`${this.percentFunded(project.current_funding, project.funding_goal)}% funded`}
              </div>
            </a>
          );
        } else {
          return (
            <a href={`#/projects/${project.id}`} className="mp-rec-proj-container">
              <img className="mp-rec-proj-img" src={project.image}></img>
              <div className="mp-rec-proj-bod">
                {project.body}
              </div>
              <div className="mp-rec-proj-percent">
                {`${this.percentFunded(project.current_funding, project.funding_goal)}% funded`}
              </div>
            </a >
          );
        }

      });

      return result;
    }
  }

  displayContact() {

    return (
      <main className="mp-center">
        <div className="mp-contact-me">
          Contact Information
        </div>
        <div className="mp-contact-me-text">
          Email me and receive a response within the first 48 hours guaranteed.
        </div>
        <a href="mailto:Nicholas.R.Boccuzzi@email.com" className="mp-contact-me-button">
          <div className="mp-contact-me-button-text">
            Contact Me
          </div>
        </a>
      </main>
    );
  }

  displayCatButtons() {
    let buttons = [
      "Food & Craft", "Design & Tech", "Arts", "Comics & Illustration",
      "Film", "Music", "Games", "Publishing"
    ];

    let buttonEls = buttons.map((button) => {

      if (this.currentFeatured === button) {
        return (
          <div id={button} className="mainpage-active-cat">
            {button}
          </div>
        );
      } else {
        return (
          <div id={button} className="mainpage-cat-li" onClick={this.switchCat}>
            {button}
          </div>
        );
      }
    });

    return (
      <main className="mainpage-cat-ul">
        {buttonEls}
      </main>
    );
  }

  displayFeatured (featured) {
    if (featured) {
      return (
        <a href={`#/projects/${featured.id}`} className="featured-image-container">
          <img className="featured-image" src={featured.image}></img>
          <div className="main-info-containers">
            <div className="white-background featured-title">
              <p>{featured.title}</p>
            </div>
            <br></br>

            <div className="white-background featured-author">
              <p>BY {featured.user.username.toUpperCase()}</p>
            </div>
            <br></br>
            <div className="white-background featured-author">
              <p className="white-background featured-funded">
                {this.percentFunded(featured.current_funding, featured.funding_goal)}% FUNDED
              </p>
            </div>
          </div>
        </a>
      );
    } else {
      return (
        <div></div>
      );
    }
  }


  displayProjects () {
    let latestList;
    let featured;
    let featuredCount = 0;
    let latestCount = 0;
    let currentFeat = this.currentFeatured;

    if (currentFeat === "Food & Craft") {
      currentFeat= "Food";
    } else if (currentFeat === "Design & Tech") {
      currentFeat = "Tech";
    } else if (currentFeat === "Comics & Illustration") {
      currentFeat = "Comics";
    } else if (currentFeat === "Arts") {
      currentFeat = "Crafts";
    } else if (currentFeat === "Film") {
      currentFeat = "Film+Video";
    }


    if (this.props.projects.length > 0 && this.loaded === true) {
      let projects = Array.from(this.props.projects);
      let that = this;

      let reversedProjects = [];
      for (var i = projects.length - 1; i >= 0; i--) {
        if (featuredCount === 0 && projects[i].category === currentFeat) {
          featured = projects[i];
          featuredCount += 1;
        }
          if (this.dateMath(projects[i])){
          latestCount += 1;
          reversedProjects.push(projects[i]);
        }
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
      featured = undefined;
      latestList = [<div>Missing Projects</div>];
    }

    return (
      <main className="mainpage-projects-container">
        <div className="flexed mainpage-marg-cont">
          <section className="featured-project-container">
            <h2 className="mainpage-projects-header ten-px-bottom">FEATURED PROJECT</h2>
            {this.displayFeatured(featured)}
          </section>
          <section className="category-tabs-container">
            <h2 className="mainpage-projects-header mainpage-littletabs">
              <div className="mp-littletabs-header">
                NEW & NOTEWORTHY
              </div>
            </h2>
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

  displayCurrentCat() {
    let featured;

    if (this.currentFeatured === "Food+Craft") {
      featured = "Food & Craft";
    } else {
      featured = this.currentFeatured;
    }

    return (
      <main className="mainpage-current-cat">
        <div>
          {featured}
        </div>
        <a className="mainpage-view-all-container" href={`#/discover?cat=${this.currentFeaturedSearch()}`}>
          <div className="mainpage-view-all">VIEW ALL</div>
          <i className="fas fa-long-arrow-alt-right"></i>
        </a>
      </main>
    );
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
            <section className="mainpage-cat-container">
              {this.displayCatButtons()}
              {this.displayCurrentCat()}
            </section>
            {this.displayProjects()}
          </div>
          <section className="mainpage-recommended-content">
            <main className="mainpage-max-width">
              <div className="mainpage-recommended-title">
                Recommended For You
              </div>
              <div className="mainpage-project-list">
                {this.displayRandomProjects()}
              </div>
            </main>
          </section>
          <section className="mp-quote-container">
            {this.displayKSQuote()}
          </section>
          <section className="mp-contact">
            {this.displayContact()}
          </section>
        </main>
      );
    } else {
      return (
        <LoadingScreen />
      );
    }
  }
}

export default Main;
