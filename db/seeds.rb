# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all

u1 = User.create!(username: "demo", password: "password", email: "demo@gmail.com", location: "New York")
u2 = User.create!(username: "winnie", password: "ilovetreats", email: "cutepuppy@yahoo.com", location: "Naples")
u3 = User.create!(username: "luke", password: "starwars", email: "thelastjedi@hotmail.com", location: "Tatooine")

p1 = Project.create!(
  title: "Seed Project 1",
  current_funding: 0,
  funding_goal: 10000,
  summary: "seed summary",
  body: "longer than seed summary",
  location: "Australia",
  creator_id: u1.id,
  deadline: "2020/02/05",
  category: "Games",
  image: File.open('app/assets/images/seeds.jpg'),
  live: true
)

p2 = Project.create!(
  title: "Seed Puppy Project",
  current_funding: 50000,
  funding_goal: 1000000,
  summary: "tracks puppy location",
  body: "longer explanation of puppy seed project",
  location: "Belgium",
  creator_id: u2.id,
  deadline: "2020/11/16",
  category: "Tech",
  image: File.open('app/assets/images/pumpkin.jpg'),
  live: true
)

p3 = Project.create!(
  title: "Seed Star Wars Project",
  current_funding: 1100,
  funding_goal: 1000,
  funded: true,
  location: "Canada",
  summary: "star wars fan film",
  body: "longer body of text to summarize film",
  creator_id: u3.id,
  deadline: "2025/05/20",
  category: "Movie",
  image: File.open('app/assets/images/sunflower.jpg'),
  live: true
)

p4 = Project.create!(
  title: "Seed App Project",
  current_funding: 12345,
  funding_goal: 100000,
  funded: false,
  location: "Denmark",
  summary: "an app that does seeding for rails",
  body: "longer body of text to summarize the app",
  creator_id: u1.id,
  deadline: "2020/02/02",
  category: "Tech",
  image: File.open('app/assets/images/acorn.jpg'),
  live: true
)

p5 = Project.create!(
  title: "Seed Art Project",
  current_funding: 250,
  funding_goal: 1000,
  funded: false,
  location: "France",
  summary: "an art project that features colors",
  body: "longer body of text to summarize the art project",
  creator_id: u2.id,
  deadline: "2022/01/01",
  category: "Art",
  image: File.open('app/assets/images/flex.jpg'),
  live: false
)

p6 = Project.create!(
  title: "Seed Music Project",
  current_funding: 250,
  funding_goal: 1000,
  funded: false,
  location: "Germany",
  summary: "an music project that features colors",
  body: "longer body of text to summarize the Japan project",
  creator_id: u1.id,
  deadline: "2019/01/01",
  category: "Music",
  image: File.open('app/assets/images/flex.jpg'),
  live: true
)

p7 = Project.create!(
  title: "Seed Journalism Project",
  current_funding: 250,
  funding_goal: 10000,
  funded: false,
  location: "Hong Kong",
  summary: "a Journalism project",
  body: "longer body of text to summarize the journalism project",
  creator_id: u2.id,
  deadline: "2019/12/12",
  category: "Journalism",
  image: File.open('app/assets/images/flex.jpg'),
  live: true
)

p8 = Project.create!(
  title: "Seed Photography Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: false,
  location: "Ireland",
  summary: "a Photography project",
  body: "longer body of text to summarize the photography project",
  creator_id: u3.id,
  deadline: "2019/10/09",
  category: "Photography",
  image: File.open('app/assets/images/flex.jpg'),
  live: true
)

p9 = Project.create!(
  title: "Seed Food Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: false,
  location: "Italy",
  summary: "a Food project",
  body: "longer body of text to summarize the Food project",
  creator_id: u3.id,
  deadline: "2018/11/04",
  category: "Food",
  image: File.open('app/assets/images/flex.jpg'),
  live: true
)

p10 = Project.create!(
  title: "Seed Publishing Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: true,
  location: "Japan",
  summary: "a Publishing project",
  body: "longer body of text to summarize the Publishing project",
  creator_id: u3.id,
  deadline: "2018/06/07",
  category: "Publishing",
  image: File.open('app/assets/images/seeds.jpg'),
  live: true
)

p11 = Project.create!(
  title: "Seed Theater Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: true,
  location: "Luxembourg",
  summary: "a Theater project",
  body: "longer body of text to summarize the Theater project",
  creator_id: u1.id,
  deadline: "2018/04/03",
  category: "Theater",
  image: File.open('app/assets/images/seeds.jpg'),
  live: true
)

p12 = Project.create!(
  title: "Seed Film & Video Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: true,
  location: "Mexico",
  summary: "a Film & Video project",
  body: "longer body of text to summarize the Film & Video project",
  creator_id: u1.id,
  deadline: "2018/04/03",
  category: "Film+Video",
  image: File.open('app/assets/images/seeds.jpg'),
  live: true
)

p13 = Project.create!(
  title: "Seed Fashion Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: true,
  location: "New Zealand",
  summary: "a Fashion project",
  body: "longer body of text to summarize the Fashion project",
  creator_id: u1.id,
  deadline: "2018/04/03",
  category: "Fashion",
  image: File.open('app/assets/images/pumpkin.jpg'),
  live: true
)

p14 = Project.create!(
  title: "Seed Design Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: false,
  location: "Switzerland",
  summary: "a Design project",
  body: "longer body of text to summarize the Design project",
  creator_id: u1.id,
  deadline: "2018/04/03",
  category: "Design",
  image: File.open('app/assets/images/pumpkin.jpg'),
  live: true
)

p14 = Project.create!(
  title: "Seed Crafts Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: false,
  location: "Norway",
  summary: "a Crafts project",
  body: "longer body of text to summarize the Crafts project",
  creator_id: u1.id,
  deadline: "2018/04/03",
  category: "Crafts",
  image: File.open('app/assets/images/pumpkin.jpg'),
  live: true
)

p15 = Project.create!(
  title: "Seed Comics Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: false,
  location: "theUnitedStates",
  summary: "a Comics project",
  body: "longer body of text to summarize the Comics project",
  creator_id: u1.id,
  deadline: "2018/04/03",
  category: "Comics",
  image: File.open('app/assets/images/pumpkin.jpg'),
  live: true
)

p16 = Project.create!(
  title: "Seed Dance Project",
  current_funding: 0,
  funding_goal: 500,
  funded: false,
  location: "theUnitedKingdom",
  summary: "a Dance project",
  body: "longer body of text to summarize the Dance project",
  creator_id: u3.id,
  deadline: "2018/04/03",
  category: "Dance",
  image: File.open('app/assets/images/acorn.jpg'),
  live: true
)
