import React from 'react';


class searchOrderModal extends React.Component {
  constructor (props) {
    super(props);

    this.location = this.props.location.pathname.split("/");

    if (this.props.location.search !== "") {
      this.search = this.props.location.search.split("&");
    }

    this.options = [
      "Magic",
      "Popularity",
      "Newest",
      "End Date",
      "Most Funded",
      "Most Backed"
    ];

    this.displayOptions = this.displayOptions.bind(this);
  }


  render () {

    return (
      <main className="sdropdown-order-container">

        {this.displayOptions()}

      </main>
    );
  }
}

export default searchOrderModal;
