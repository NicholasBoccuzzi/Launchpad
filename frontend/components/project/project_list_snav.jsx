import React from 'react';


class projectList extends React.Component {

  constructor(props) {
    super(props);


    this.searchUrlFromLoc = this.searchUrlFromLoc.bind(this);
    this.searchUrlFromCat = this.searchUrlFromCat.bind(this);
  }

  searchUrlFromLoc(bool) {
    if (this.search) {
      if (this.search[0].includes("cat") && bool) {
        return `?${this.search[0]}&`;
      } else {
        return `?`;
      }
    } else {
      return `?`;
    }
  }

  displayCurrentCountry() {
    if (this.search) {
      let i = this.search.length - 1;

      if (this.search[i] && this.search[i].includes("loc=")) {
        return this.search[i].slice(4);
      } else {
        return "Earth";
      }
    } else {
      return "Earth";
    }
  }

  locationLiClass (location, side) {
    if (location === "Earth") {
      location = null;
    }

    if (this.state.loc === location) {
      if (side) {
        return "pl-sn-loc-li-left pl-green";
      } else {
        return "pl-sn-loc-li-right pl-green";
      }
    } else {
      if (side) {
        return "pl-sn-loc-li-left";
      } else {
        return "pl-sn-loc-li-right";
      }
    }
  }

  searchUrlFromCat(category) {
    if (category === "All Categories") {
      if (this.state.loc) {
        return `?loc=${this.state.loc}`;
      } else {
        return "";
      }
    } else {
      if (this.state.loc) {
        return `?cat=${category}&loc=${this.state.loc}`;
      } else {
        return `?cat=${category}`;
      }
    }
  }

  locationClick(location) {
    let cat;
    if (this.search) {
      if (this.search[0].includes('cat')) {
        cat = this.search[0].slice(4);
      } else {
        cat = null;
      }
    } else {
      cat = null;
    }

    let searchQuery = {category: cat, location: location};
    this.props.toggleLocationModal();

    if (location || cat) {
      this.props.fetchProjects(searchQuery);
    } else {
      this.props.fetchProjects();
    }
  }

  categoryClick(category) {
    if (category === "All Categories") {
      category = null;
    }

    this.setState({cat: category});

    let loc;
    if (this.state.loc === "") {
      loc = null;
    } else {
      loc = this.state.loc;
    }


    let searchQuery = {category: category, location: loc};

    this.props.toggleCategoryModal();

    if (category || loc) {
      this.props.fetchProjects(searchQuery);
    } else {
      this.props.fetchProjects();
    }
  }

  displayDeactivateModal() {
    if (this.props.categoryModal) {
      return (
        <div
          className="pl-sn-invis-background"
          onClick={this.props.toggleCategoryModal}>
        </div>
      );
    } else if (this.props.locationModal) {
      return (
        <div
          className="pl-sn-invis-background"
          onClick={this.props.toggleLocationModal}>
        </div>
      );
    }
  }


  render () {

  }
}
