# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create!(username: "demo", password: "password", email: "demo@gmail.com", location: "New York")
u2 = User.create!(username: "winnie", password: "ilovetreats", email: "cutepuppy@yahoo.com", location: "Naples")
u3 = User.create!(username: "luke", password: "starwars", email: "thelastjedi@hotmail.com", location: "Tatooine")

p1 = Project.create!(
  title: "Seed Project 1",
  current_funding: 0,
  funding_goal: 10000,
  summary: "seed summary",
  body: "longer than seed summary",
  creator_id: u1.id,
  deadline: "2020/02/05",
  category: "Games"
)

p2 = Project.create!(
  title: "Seed Puppy Project",
  current_funding: 500,
  funding_goal: 1000000,
  summary: "tracks puppy location",
  body: "longer explanation of puppy seed project",
  creator_id: u2.id,
  deadline: "2020/11/16",
  category: "Tech"
)

p3 = Project.create!(
  title: "Seed Star Wars Project",
  current_funding: 1200,
  funding_goal: 1000,
  funded: true,
  summary: "star wars fan film",
  body: "longer body of text to summarize film",
  creator_id: u3.id,
  deadline: "2025/05/20",
  category: "Movie"
)
