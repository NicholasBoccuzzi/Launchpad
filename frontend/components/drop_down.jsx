import React from 'react';
import onClickOutside from 'react-onclickoutside';


class DropDown extends React.Component {
  constructor (props) {
    super(props);
  }


  handleClickOutside (e) {
    this.props.toggleProfileDropDown();
  }


  render () {
    return (
      <main className={this.props.class}>
        <div className="profile-dropdown-header">Welcome, {this.props.currentUser.username}!</div>
        <div className="logout-dropdown-box">
          <button onClick={() => { return (
              this.props.toggleProfileDropDown(),
              this.props.logout()
              );
            }}
            className="logout-dropdown">LOGOUT
          </button>

        </div>
      </main>
    );
  }
}

export default onClickOutside(DropDown);
