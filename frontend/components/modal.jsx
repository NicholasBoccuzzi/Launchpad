import React from 'react';


class DropDown extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {

    const errors = this.props.errors.map ((error, i) => {
      return (
        <li key={`error-${i}`}>
          {error}
        </li>
      );
    });

    return (
      <main onClick={this.props.toggleErrorModal} className="transparent-background">

        <ul className="modal-box">
          {
            errors
          }
        </ul>
      </main>
    );
  }
}

export default DropDown;
