import React from 'react';


class DropDown extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {

    return (
      <main className={this.props.class}>
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

export default DropDown;
