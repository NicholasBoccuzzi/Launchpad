const a = { username: "demo", email: "demo", password: "password", location: "New York" }

$.ajax({
  method: "POST",
  url: '/api/users',
  data: {user: a }
});
