import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './drop_down_container';
import Modal from './modal_container';

class Navbar extends React.Component {
  constructor () {
    super();
    this.state = {
      currentScrollPosition: 0
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
  }

  componentDidMount() {
    if (this.props.exploreModalActive) {
      window.addEventListener("scroll", (e) => {
      this.setState({currentScrollPosition: Math.ceil(e.currentTarget.scrollY)});
      });
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() {
    if (this.props.exploreModalActive) {
      this.props.deactivateExploreModal();
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
      console.log(this.state.currentScrollPosition);
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
            <div className={this.expDisplayCollection()} onClick={this.scrollToCollection}>
              <div className="exp-col-title">
                Collections
              </div>
              <div className="exp-bigger-x" onClick={this.props.deactivateExploreModal}>
                <i className="fas fa-times"></i>
              </div>
            </div>
            <section className={this.expMarginCheck()}>
              <div className="exp-list-item">Recommended For You</div>
              <div className="exp-list-item">Projects We Love</div>
              <div className="exp-list-item">Saved Projects</div>
              <div className="exp-list-item">Trending</div>
              <div className="exp-list-item">Nearly Funded</div>
              <div className="exp-list-item">Just Launched</div>
              <div className="exp-list-item">Backed By People You Follow</div>
              <div className="exp-list-item exp-bottom-item">Everything</div>
            </section>
            <div className={this.expDisplaySections()} onClick={this.scrollToSections}>
              <div className="exp-col-title">
                Sections
              </div>
            </div>
            <section className="exp-list">
              <div className="exp-list-item">Arts</div>
              <div className="exp-list-item">Comics & Illustration</div>
              <div className="exp-list-item">Design & Tech</div>
              <div className="exp-list-item">Film</div>
              <div className="exp-list-item">Food & Craft</div>
              <div className="exp-list-item">Games</div>
              <div className="exp-list-item">Music</div>
              <div className="exp-list-item exp-bottom-item">Publishing</div>
            </section>
            <div className={this.expDisplayCategories()}>
              <div className="exp-col-title" onClick={this.scrollToCategories}>
                Categories
              </div>
            </div>
            <section className="exp-list">
              <div className="exp-list-item">Arts</div>
              <div className="exp-list-item">Comics</div>
              <div className="exp-list-item">Crafts</div>
              <div className="exp-list-item">Dance</div>
              <div className="exp-list-item">Design</div>
              <div className="exp-list-item">Fashion</div>
              <div className="exp-list-item">Film & Video</div>
              <div className="exp-list-item">Food</div>
              <div className="exp-list-item">Games</div>
              <div className="exp-list-item">Journalism</div>
              <div className="exp-list-item">Music</div>
              <div className="exp-list-item">Photography</div>
              <div className="exp-list-item">Publishing</div>
              <div className="exp-list-item">Technology</div>
              <div className="exp-list-item exp-bottom-item">Theater</div>
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
