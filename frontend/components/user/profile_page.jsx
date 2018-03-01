import React from 'react';
import { Link } from 'react-router-dom';

class profilePage extends React.Component {
  constructor (props) {
    super(props);

    this.renderTopInfo = this.renderTopInfo.bind(this);
    this.editProfileButton = this.editProfileButton.bind(this);
    this.profileNumber = parseInt(this.props.location.pathname.split("/")[2]);
    this.renderProfileImage = this.renderProfileImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.profileNumber);
  }

  componentWillReceiveProps(nextProps) {
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


  renderProfileImage () {
    if (this.props.user) {
      return (
        <img className="pro-top-image" src={this.props.user.image}></img>
      );
    }
  }

  renderTopInfo () {

    return(
      <main className="pro-top-info-container">
        {this.editProfileButton()}
        <section className="pro-top-center">
          <div className="pro-top-image-container">
            {this.renderProfileImage()}
          </div>
          <div>

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
