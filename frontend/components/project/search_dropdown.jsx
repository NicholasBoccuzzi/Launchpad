import React from 'react';

class SearchDropdown extends React.Component {
  constructor (props) {
    super(props);

    this.locations = [
      "Australia", "Austria", "Belgium", "Canada", "Denmark", "France", "Germany",
      "Hong Kong","Ireland","Italy","Japan","Luxembourg","Mexico","New Zealand",
      "Norway","Singapore","Spain","Sweden","Switzerland","the Netherlands",
      "the United Kingdom","the United States"
    ];

    this.state = {
      currentSearch: props.currentSearch
    };

    this.location = this.props.location.pathname.split("/");

    if (this.props.location.search !== "") {
      this.search = this.props.location.search.split("&");
    }

    this.renderCorrectResults = this.renderCorrectResults.bind(this);
  }

  componentDidMount () {

  }



  renderCorrectResults () {
    let correct = this.locations.map((location) => {
      if (location.toLowerCase().includes(this.state.currentSearch.toLowerCase())) {
        if (location === "the United States") {
          location = "theUnitedStates";
        } else if (location === "the United Kingdom") {
          location = "theUnitedKingdom";
        } else if (location === "the Netherlands") {
          location = "theNetherlands";
        }

        return (
          <div className="sdropdown-li">
            <a className="sdropdown-li-text"
              href={`#${this.location.join("/")}${this.props.searchUrlFromLoc(true)}loc=${location}`}
              onClick={() => {this.props.locationClick(location);}}>
              {location}
            </a>
          </div>
        );
      }
    });


    return (
      <div>
        {correct}
      </div>
    );
  }


  render () {

    return (
      <div className="sdropdown-container">
        {this.renderCorrectResults()}
      </div>
    );
  }
}

export default SearchDropdown;
