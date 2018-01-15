# README

# LAUNCHPAD
![](https://i.imgur.com/hl5yvXZm.png)

[Launchpad](https://thelaunchpad.herokuapp.com/#/)


# SUMMARY

Launchpad is a full-stack application that allows a User to create projects similar to Kickstarter. Launchpads current functionality includes:

*  Create an account
*  Log In / Log Out
*  Create / Update Projects
*  View Individual Project Info
*  View List of all Projects


# STRUCTURE

**Back End**
Launchpad is built utilizing a Ruby on Rails framework and PostgreSQL database. Launchpad's architecture is RESTful with all AJAX requests being received through JSON API.

**Front End**
Launchpad has a front end built with React.js. By choosing React, Launchpad allows a User to use the majority of the site without having to receive new webpages from the backend. By breaking down the site into React components, the User experience remains quick and efficient.

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

* User Authentication
Users are able to sign up, log in and log out of Launchpad. User information is kept secure using BCrypt's password hashing. Rather than storing a User's password in Launchpad's PostgreSQL database, a password hash is stored and compared every time a User signs up or attempts to log in, respectively. This process allows for the secure verification of User credentials.

* Project Creation / Updating
When logged in, Users have access to both the Create form for new projects and the Update form for their own projects. Front-End authentication redirects a User back to the Project's show page when the User is not the creator of the project.
