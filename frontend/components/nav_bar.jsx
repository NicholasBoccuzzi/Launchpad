import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './drop_down_container';
import Modal from './modal_container';

class Navbar extends React.Component {
  constructor () {
    super();
    this.state = {
      currentScrollPosition: 0,
      currentScreenSize: window.outerWidth
    };

    this.isSession = this.isSession.bind(this);
    this.displayDrowDown = this.displayDrowDown.bind(this);
    this.displayExploreModal = this.displayExploreModal.bind(this);
    this.expDisplayCollection = this.expDisplayCollection.bind(this);
    this.expMarginCheck = this.expMarginCheck.bind(this);
    this.expCollectionMargin = this.expCollectionMargin.bind(this);
    this.expSectionMargin = this.expSectionMargin.bind(this);
    this.expDisplaySections = this.expDisplaySections.bind(this);
    this.expDisplayCategories = this.expDisplayCategories.bind(this);
    this.scrollToCollection = this.scrollToCollection.bind(this);
    this.scrollToSections = this.scrollToSections.bind(this);
    this.scrollToCategories = this.scrollToCategories.bind(this);
    this.expCorrectLength = this.expCorrectLength.bind(this);
  }

  componentDidMount() {
    if (this.props.exploreModalActive) {
      window.addEventListener("scroll", (e) => {
      this.setState({currentScrollPosition: Math.ceil(e.currentTarget.scrollY)});
      });
      window.addEventListener("resize", (e) => {
        this.setState({currentScreenSize: window.outerWidth});
      });
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() {
    if (this.props.exploreModalActive) {
      this.props.deactivateExploreModal();
      window.scrollTo(0, 0);
    }
  }

  expCorrectLength() {
    if (this.state.currentScreenSize >= 1244 && this.state.currentScreenSize < 1370) {
      let currentWidth = (120 - (this.state.currentScreenSize - 1244));
      return ({"width": `calc(100% - ${currentWidth}px)`});
    }
  }

  scrollToCollection (e) {
    window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
    });
  }

  scrollToSections (e) {
    window.scroll({
    top: 470,
    left: 0,
    behavior: 'smooth'
    });
  }

  scrollToCategories(e) {
    window.scroll({
    top: 940,
    left: 0,
    behavior: 'smooth'
    });
  }

  expDisplayCollection () {
    if (this.state.currentScrollPosition > 0) {
      return (
        "exp-col-collection"
      );
    } else {
      return (
        "exp-col-container"
      );
    }
  }

  expDisplaySections () {
    if (this.state.currentScrollPosition > 470) {
      return (
        "exp-title-container exp-sec"
      );
    } else {
      return (
        "exp-title-container"
      );
    }
  }

  expDisplayCategories () {
    if (this.state.currentScrollPosition > 940) {
      return (
        "exp-title-container exp-cat"
      );
    } else {
      return (
        "exp-title-container"
      );
    }
  }

  expCollectionMargin () {
    if (this.state.currentScrollPosition > 0) {
      return (
        {"top": this.state.currentScrollPosition,
          "background": "#FBFBFA"}
      );
    }
  }

  expSectionMargin () {
    if (this.state.currentScrollPosition > 0) {
      return (
        { "position": "fixed",
          "top": this.state.currentScrollPosition,
          "background": "#FBFBFA",
          "width": "calc(100% - 120px);"
        }
      );
    }
  }

  expMarginCheck () {
    if (this.state.currentScrollPosition < 1) {
      return (
        "exp-list"
      );
    } else if (this.state.currentScrollPosition <= 470) {
      return (
        "exp-list exp-first-margin"
      );
    } else if (this.state.currentScrollPosition <= 940) {
      return (
        "exp-list exp-second-margin"
      );
    } else {
      return (
        "exp-list exp-third-margin"
      );
    }
  }


  isSession () {

    if (this.props.currentUser) {
      return(
        <div>
          <button className="nav-button search-button-loggined-in">
          </button>
          <div className="nav-button main-profile-button" onClick={this.props.toggleProfileDropDown}>
            <img className="profile-icon" src={this.props.currentUser.image}>
            </img>
          </div>
        </div>
      );
      } else {
        return (
          <div>
            <button className="nav-button search-button-no-login">
            </button>
            <Link className="nav-button left" to="/login">Sign In</Link>
          </div>
        );
      }
  }

  displayDrowDown () {
    if (this.props.profileDropDownActive) {
      return <DropDown />;
    }
  }

  displayExploreModal () {
    if (this.props.exploreModalActive) {
    }
  }

  forExplore() {
    if (this.props.exploreModalActive) {
      return (
        <main id="modal" className="exp-full-container">
          <div className="exp-centered-container">
            <div style={this.expCorrectLength()} className={this.expDisplayCollection()} onClick={this.scrollToCollection}>
              <div className="exp-col-title">
                Collections
              </div>
              <div className="exp-bigger-x" onClick={this.props.deactivateExploreModal}>
                <i className="fas fa-times"></i>
              </div>
            </div>
            <section className={this.expMarginCheck()}>
              <a href="#/discover"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Recommended For You</a>
              <a href="#/discover"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Projects We Love</a>
              <a href="#/discover"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Saved Projects</a>
              <a href="#/discover"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Trending</a>
              <a href="#/discover"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Nearly Funded</a>
              <a href="#/discover"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Just Launched</a>
              <a href="#/discover"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Backed By People You Follow</a>
              <a href="#/discover"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item exp-bottom-item">Everything</a>
            </section>
            <div style={this.expCorrectLength()} className={this.expDisplaySections()} onClick={this.scrollToSections}>
              <div className="exp-col-title">
                Sections
              </div>
            </div>
            <section className="exp-list">
              <a href="#/discover?cat=Art"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Arts</a>
              <a href="#/discover?cat=Comics"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Comics & Illustration</a>
              <a href="#/discover?cat=Tech"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Design & Tech</a>
              <a href="#/discover?cat=Film"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Film</a>
              <a href="#/discover?cat=Food"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Food & Craft</a>
              <a href="#/discover?cat=Games"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Games</a>
              <a href="#/discover?cat=Music"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Music</a>
              <a href="#/discover?cat=Publishing"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item exp-bottom-item">Publishing</a>
            </section>
            <div style={this.expCorrectLength()} className={this.expDisplayCategories()}>
              <div className="exp-col-title" onClick={this.scrollToCategories}>
                Categories
              </div>
            </div>
            <section className="exp-list">
              <a href="#/discover/category/Arts"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Arts</a>
              <a href="#/discover/category/Comics"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Comics</a>
              <a href="#/discover/category/Crafts"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Crafts</a>
              <a href="#/discover/category/Dance"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Dance</a>
              <a href="#/discover/category/Design"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Design</a>
              <a href="#/discover/category/Fashion"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Fashion</a>
              <a href="#/discover/category/Film+Video"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Film & Video</a>
              <a href="#/discover/category/Food"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Food</a>
              <a href="#/discover/category/Games"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Games</a>
              <a href="#/discover/category/Journalism"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Journalism</a>
              <a href="#/discover/category/Music"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Music</a>
              <a href="#/discover/category/Photography"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Photography</a>
              <a href="#/discover/category/Publishing"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Publishing</a>
              <a href="#/discover/category/Tech"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item">Technology</a>
              <a href="#/discover/category/Theater"
                onClick={this.props.deactivateExploreModal}
                className="exp-list-item exp-bottom-item">Theater</a>
            </section>
            <section className="exp-bottom">
            </section>
          </div>
        </main>
      );
    }
  }


// explore should end up at {"/discover"}

  render () {

    if (!this.props.exploreModalActive) {
      return (
        <div>
          <nav className="main-nav">
            <section className="top-nav-left">
              <div className="nav-button right" onClick={this.props.activateExploreModal}>Explore</div>
              <a className="nav-button" href={"#/startproject"}>Start a project</a>
            </section>
            <section className="top-nav-middle">
              <a href="#" className="title-link">LAUNCHPAD</a>
            </section>
            <section className="top-nav-right">
              {this.isSession()}
            </section>
          </nav>
          {this.displayDrowDown()}
          {this.displayExploreModal()}
        </div>
      );
    } else {
      return (
        <div>
          {this.forExplore()}
        </div>
      );
    }
  }
}





// Explore in first button
// Launch a project in second project
// Search and <i className="fa fa-search" aria-hidden="true"></i> in third button


export default Navbar;
