import React from 'react';
import { Link } from 'react-router-dom';

class profilePage extends React.Component {
  constructor (props) {
    super(props);

    this.renderTopInfo = this.renderTopInfo.bind(this);
    this.editProfileButton = this.editProfileButton.bind(this);
  }

  componentDidMount() {
  }


  editProfileButton () {
    if (
      parseInt(
        this.props.location.pathname.split("/")[2]) ===  this.props.currentUser.id
      ) {
      return (
        <div className="pro-edit-and-share">
          <a href="" className="pro-share-profile-link">
            Share your profile
          </a>

          <a href="" className="pro-edit-profile-link">
            Edit your profile
          </a>
        </div>
      );
    }
  }



  renderTopInfo () {

    return(
      <main className="pro-top-info-container">
        {this.editProfileButton()}
        <section className="pro-top-center">
          <div className="pro-top-image-container">
            <img className="pro-top-image" src={this.props.currentUser.image}></img>
          </div>
          <div>
            this.props.
          </div>
        </section>
      </main>
    );
  }

  render () {

    return (
      <div className="pro-content-container">
        {this.renderTopInfo()}
      </div>
    );
  }

}


export default profilePage;
