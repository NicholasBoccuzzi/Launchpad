# README

# LAUNCHPAD
![](https://imgur.com/ogbzPXf.png)

[Launchpad](https://thelaunchpad.herokuapp.com/#/)


# SUMMARY

Launchpad is a Kickstarter-Inspired full-stack app. Launchpads current functionality includes:

*  Create an account
*  Log In / Log Out
*  Create / Update Projects
*  Create Rewards
*  Back Projects
*  View Individual Project Info
*  View List of all Projects


# STRUCTURE

**Back End**

Launchpad is built utilizing a Ruby on Rails framework and PostgreSQL database. Launchpad's architecture is RESTful with all AJAX requests being received through JSON API.

**Front End**

Launchpad has a front end built with React.js. By choosing React, Launchpad allows a User to use the majority of the site without ever having to receive a completely new webpage from the backend. By breaking down the site into React components, the User experience remains quick and efficient.

**Libraries**


Launchpad uses:

* [React.js](https://facebook.github.io/react/)
* [Flux](https://facebook.github.io/flux/)
* [BCrypt](https://github.com/codahale/bcrypt-ruby) for User Authentication
* [PaperClip](https://github.com/thoughtbot/paperclip) for Photo upload / download
* [Figaro](https://github.com/laserlemon/figaro) to secure Amazon Web Service keys
* [Animate CSS](https://github.com/daneden/animate.css/)
* [Progress Bar](https://github.com/react-component/progress) to visualize each Project's current funding percentage

# Primary Components

User Authentication
* Users are able to sign up, log in and log out of Launchpad. User information is kept secure using BCrypt's password hashing. Rather than storing a User's password in Launchpad's PostgreSQL database, a password hash is stored and compared every time a User signs up or attempts to log in, respectively. This process allows for the secure verification of User credentials.

![](https://imgur.com/DAZoVjQ.png)

Project Creation
* When logged in, Users have access to the Create form for new projects. Similar to Kickstarter, the only requirements are a category, a short summary of the project, the project creator's location and a checklist of qualifications to ensure creator validity. These are all displayed using dropdown menus that update onClick of the selected criteria.


![](https://imgur.com/VHte4l5.png)

Project Build
* Launchpad features a Project Build page that tracks a project's progress to completion before it is allowed to go live on the site for backing. This is the page that is rerouted to on a successful project creation. Depending on whether or not certain aspects of the project are complete, the checklist will designate " x / 5 " complete and display a green check when that aspect is ready to be pushed live.


![](https://imgur.com/SBdqm95.png)

Project Update
* The update page features a nav bar that will allow you to switch between updating specific attributes of the project. It also has a back button that will send you to the build page. Depending on which button is selected, a CSS animation will remove the current page and slide in the new one. It is here that a project can create new rewards, update its picture and all other attributes by making any changes. To save the changes made, a modal is displayed. Depending on the page, the modal will either send an AJAX Patch request for the project or an AJAX Create request for rewards.


![](https://imgur.com/BRcPQvc.png)

Explore
* The Explore page is used to link a User to the discover page with pre-filled search criteria. This page features dynamic class selection for its HTML elements which will stack the Header of each list depending on how far a User has scrolled down the page. This page removes all other components from being rendered at the time and on click of either the X in the top corner or any of the selections, it either sends a User back to the prior URL or to the new discover page with the correct search params.


![](https://imgur.com/pi4OwAl.png)

Multi-Layered Search Queries
* Using injected SQL in my backend ruby methods, Users (logged in or not) can use the discover page to select particular projects from my PostgreSQL database. By selecting a project category, it will display all of the projects with that given category. A step further, users can add additional search params by selecting a location and a sorting method. These are all handled by updating the URL with the selected criteria, dissecting the new URL's search parameters, and then sending a fetch request to the server.

Dissecting the Search
* depending on what the current search is (if any), the state is set accordingly.
```
dissectSearch(nextProps) {
  this.search = nextProps.location.search.split("&");

  let oldCat = this.state.cat;
  let oldOrd = this.state.ord;
  let oldLoc = this.state.loc;

  for (var i = 0; i < this.search.length; i++) {
    if (i === 0) {
      this.search[i] = this.search[i].slice(1);
    }

    if (this.search[i].includes("loc=")) {

      this.setState({loc: this.search[i].slice(4)});
    }

    if (this.search[i].includes("cat=")) {
      this.setState({cat: this.search[i].slice(4)});
    }

    if (this.search[i].includes("ord=")) {
      this.setState({ord: this.search[i].slice(4)});
      if (oldOrd !== this.search[i].slice(4)) {
        this.props.fetchProjects({category: this.state.cat, location: this.state.loc, order: this.state.ord});
      }
    }

    if (oldCat && !nextProps.location.search.includes("cat=")) {
      this.setState({cat: null});
    }

    if (oldLoc && !nextProps.location.search.includes("loc=")) {
      this.setState({loc: null});
    }

    if (oldOrd && !nextProps.location.search.includes("ord=")) {
      this.setState({ord: null});
    }
  }
}
```

![](https://imgur.com/kbB2gKh.png)

Project Show
* The project show will fetch the project that is associated with the project id in the URL. Once that loads, the project show page will display whether or not the project is live and whether it belongs to the currentUser. Based on those two criteria, the proper React components will be rendered. Below, you can see that the project is not live, therefore the button to back the project is grey'd out, however the project does not belong to the current User so there is an icon and name rendered of the project's User which links to that user's profile page.

![](https://imgur.com/ZTmujwT.png)

Reward Selection
* Users are able to select from any reward or the default ("Make a pledge without a reward"). These rewards are loaded through Rails associations for the current page's project. Each reward's info is passed into a React component which will return the proper reward cost, description and delivery date as a link. The link will update depending on the reward passed in and load the checkout page when clicked.


![](https://imgur.com/5TaCSZs.png)


Checkout
* OnClick of a reward will bring you directly to the checkout page with all of the information pre-filled. A user may fill out their payment info and onClick of the pledge, two AJAX requests are made to the back end. If there was a reward involved, it creates a Backing and there is also an update request made to the Project to increase the Current_Funding by the pledge amount.


![](https://imgur.com/f0hrAW4.png)

User Profile Page
* There are multiple ways for Users to enter anther users profile page. If the User does not own the project, the User may click on the User icon and it will send them to the profile page of the project owner.

* In a User profile page, all of the live projects that a User has will be displayed below. It also features an About page where a User can read where the page's User is from and any biography they might have.

![](https://imgur.com/E12PJB2.png)
