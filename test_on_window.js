// const a = { username: "demo", email: "demo", password: "password", location: "New York" }
//
// $.ajax({
//   method: "POST",
//   url: '/api/users',
//   data: {user: a }
// });


/*

  Ok, so here's what I'm understanding about components and containers:
  the container is what you pass into the app.jsx and you call it
  whatever you imported into the container. What you are exporting is
  the connected version of this which now has the props from the container.


  how does the route_util work?
  used for custom routes (an extra layer)

  giving a route and a component to render at that route but only show this component
  if passes if statement.

  the route imported to App.jsx is (again) the connected version which is
  defined inside route_util.jsx. We map state to props in this file which
  is why we do not need to use a container.

  We defined const Auth at the top of this file which takes in the passed in props
  of component and then we use ({component: Component}) which allows us to
  render <Component {...props} /> if the user is logged in or not. If
  not, we redirect to ="/" which happens whenever a user types in the specified
  path (located in App.jsx).
*/


// import React from 'react' // rcd
// import PropTypes from 'prop-types'
//
// class Navbar extends React.Component {
//
//   componentWillUpdate(nextProps, nextState) {
//     // cwu6
//   }
//
//   componentDidMount() {
//     // cdm6
//   }
//
//   componentWillReceiveProps(nextProps) {
//
//   }
//
//   render () {
//
//   }
// }
//
// export default Navbar;
// <<<<<<< HEAD
// =======
//
// onclickoutside
// >>>>>>> finishAuth
