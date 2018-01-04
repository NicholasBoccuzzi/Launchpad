import React from 'react';


class DropDown extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      active: this.props.active
    };

  }

  render () {

    return (
      <main className={this.props.class}>
        <h1>success</h1>
      </main>
    );
  }
}

export default DropDown;
