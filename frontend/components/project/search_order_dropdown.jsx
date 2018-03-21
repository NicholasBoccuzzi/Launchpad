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
    this.disectCurrentSearch = this.disectCurrentSearch.bind(this);
    this.handleOrderClick = this.handleOrderClick.bind(this);
  }

  handleOrderClick () {
    this.props.toggleSearchOrderModal();
  }

  disectCurrentSearch() {
    let result;


    if (this.search !== undefined) {
      if (this.search[0].includes("cat")) {
        result = this.search[0].slice(1);
      }

      if (this.search[1] && this.search[1].includes("loc")) {
        result += "&" + this.search[1] + "&";
      }
    }

    if (this.search !== undefined) {
      if (this.search[0].includes("loc")) {
        result = `${this.search[0].slice(1)}&`;
      }
    }

    if (result !== undefined) {
      return result;
    } else {
      return "";
    }
  }

  displayOptions() {

    let results = this.options.map((option) => {
      let trueOption;

      if (option === "Most Funded") {
        trueOption = "MostFunded";
      } else if (option === "Most Backed") {
        trueOption = "MostBacked";
      } else if (option === "End Date") {
        trueOption = "EndDate";
      } else {
        trueOption = option;
      }


      if (!this.props.currentOrd && option === "Magic") {
        return (
          <a className="sdropdown-order-li sdropdown-order-li-active"
            href={`#${this.location.join('/')}?${this.disectCurrentSearch()}ord=${trueOption}`}
            onClick={this.handleOrderClick}>
            {option}
          </a>
        );
      }
      else if (this.props.currentOrd === option) {
        return (
          <a className="sdropdown-order-li sdropdown-order-li-active"
            href={`#${this.location.join('/')}?${this.disectCurrentSearch()}ord=${trueOption}`}
            onClick={this.handleOrderClick}>
            {option}
          </a>
        );
      } else {
        return (
          <a className="sdropdown-order-li"
            href={`#${this.location.join('/')}?${this.disectCurrentSearch()}ord=${trueOption}`}
            onClick={this.handleOrderClick}>
            {option}
          </a>
        );
      }
    });

    return results;
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
