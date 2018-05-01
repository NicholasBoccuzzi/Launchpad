# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all
Reward.destroy_all
Backing.destroy_all

u1 = User.create!(username: "demo", password: "password", email: "demo@gmail.com", location: "New York")
u2 = User.create!(username: "winnie", password: "ilovetreats", email: "cutepuppy@yahoo.com", location: "Naples")
u3 = User.create!(username: "luke", password: "starwars", email: "thelastjedi@hotmail.com", location: "Tatooine")

p1 = Project.create!(
  title: "Games Project",
  current_funding: 0,
  funding_goal: 10000,
  summary: "seed summary",
  body: "longer than seed summary",
  location: "Australia",
  deadline: DateTime.new(2018,10,7),
  creator_id: u1.id,
  category: "Games",
  image: File.open('app/assets/images/sot.png'),
  live: true,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)

p2 = Project.create!(
  title: "Puppy Project",
  current_funding: 50000,
  funding_goal: 1000000,
  summary: "tracks puppy location",
  body: "longer explanation of puppy seed project",
  location: "Belgium",
  creator_id: u2.id,
  deadline: DateTime.new(2018,12,7),
  category: "Tech",
  image: File.open('app/assets/images/puppies.jpg'),
  live: true,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)

p3 = Project.create!(
  title: "Star Wars Project",
  current_funding: 1100,
  funding_goal: 1000,
  funded: true,
  location: "Canada",
  summary: "star wars fan film",
  body: "longer body of text to summarize film",
  creator_id: u3.id,
  deadline: DateTime.new(2018,8,7),
  category: "Movie",
  image: File.open('app/assets/images/starwars.png'),
  live: true,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)

p4 = Project.create!(
  title: "App Project",
  current_funding: 12345,
  funding_goal: 100000,
  funded: false,
  location: "Denmark",
  summary: "an app that does seeding for rails",
  body: "longer body of text to summarize the app",
  creator_id: u1.id,
  deadline: DateTime.new(2018,7,9),
  category: "Tech",
  image: File.open('app/assets/images/app.png'),
  live: true,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)

p5 = Project.create!(
  title: "Art Project",
  current_funding: 250,
  funding_goal: 1000,
  funded: false,
  location: "France",
  summary: "an art project that features colors",
  body: "longer body of text to summarize the art project",
  creator_id: u2.id,
  deadline: DateTime.new(2018,10,2),
  category: "Art",
  image: File.open('app/assets/images/artist.jpg'),
  live: false,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)

p6 = Project.create!(
  title: "Music Project",
  current_funding: 250,
  funding_goal: 1000,
  funded: false,
  location: "Germany",
  summary: "an music project that features colors",
  body: "longer body of text to summarize the Japan project",
  creator_id: u1.id,
  deadline: DateTime.new(2019,2,6),
  category: "Music",
  image: File.open('app/assets/images/music.jpg'),
  live: true,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)

p7 = Project.create!(
  title: "Journalism Project",
  current_funding: 250,
  funding_goal: 10000,
  funded: false,
  location: "Hong Kong",
  summary: "a Journalism project",
  body: "longer body of text to summarize the journalism project",
  creator_id: u2.id,
  deadline: DateTime.new(2018,12,10),
  category: "Journalism",
  image: File.open('app/assets/images/journalist.jpg'),
  live: true,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)

p8 = Project.create!(
  title: "Photography Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: false,
  location: "Ireland",
  summary: "a Photography project",
  body: "longer body of text to summarize the photography project",
  creator_id: u3.id,
  deadline: DateTime.new(2018,8,11),
  category: "Photography",
  image: File.open('app/assets/images/photography.jpg'),
  live: true,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)

p9 = Project.create!(
  title: "DONUT Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: false,
  location: "Italy",
  summary: "a Food project",
  body: "longer body of text to summarize the Food project",
  deadline: DateTime.new(2018,11,9),
  creator_id: u3.id,
  category: "Food",
  image: File.open('app/assets/images/donuts.jpg'),
  live: true,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)

p10 = Project.create!(
  title: "Publishing Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: true,
  location: "Japan",
  summary: "a Publishing project",
  body: "longer body of text to summarize the Publishing project",
  creator_id: u3.id,
  deadline: DateTime.new(2018,8,7),
  category: "Publishing",
  image: File.open('app/assets/images/publishing.jpg'),
  live: true,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)

p11 = Project.create!(
  title: "Theater Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: true,
  location: "Luxembourg",
  summary: "a Theater project",
  body: "longer body of text to summarize the Theater project",
  creator_id: u1.id,
  deadline: DateTime.new(2018,7,7),
  category: "Theater",
  image: File.open('app/assets/images/theater.jpg'),
  live: true,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)

p12 = Project.create!(
  title: "Film & Video Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: true,
  location: "Mexico",
  summary: "a Film & Video project",
  body: "longer body of text to summarize the Film & Video project",
  creator_id: u1.id,
  deadline: DateTime.new(2018,10,11),
  category: "Film+Video",
  image: File.open('app/assets/images/filming.jpg'),
  live: true,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)

p13 = Project.create!(
  title: "Fashion Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: true,
  location: "New Zealand",
  summary: "a Fashion project",
  body: "longer body of text to summarize the Fashion project",
  creator_id: u1.id,
  deadline: DateTime.new(2018,9,7),
  category: "Fashion",
  image: File.open('app/assets/images/fashion.jpg'),
  live: true,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)

p14 = Project.create!(
  title: "Design Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: false,
  location: "Switzerland",
  summary: "a Design project",
  body: "longer body of text to summarize the Design project",
  creator_id: u1.id,
  deadline: DateTime.new(2018,7,7),
  category: "Design",
  image: File.open('app/assets/images/design.jpg'),
  live: true,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)

p14 = Project.create!(
  title: "Crafts Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: false,
  location: "Norway",
  summary: "a Crafts project",
  body: "longer body of text to summarize the Crafts project",
  creator_id: u1.id,
  deadline: DateTime.new(2018,7,7),
  category: "Crafts",
  image: File.open('app/assets/images/crafts.jpg'),
  live: true,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)

p15 = Project.create!(
  title: "Comics Project",
  current_funding: 0,
  funding_goal: 1000,
  funded: false,
  location: "theUnitedStates",
  summary: "a Comics project",
  body: "longer body of text to summarize the Comics project",
  creator_id: u1.id,
  deadline: DateTime.new(2018,7,7),
  category: "Comics",
  image: File.open('app/assets/images/comics.jpg'),
  live: true,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)

p16 = Project.create!(
  title: "Dance Project",
  current_funding: 0,
  funding_goal: 500,
  funded: false,
  location: "theUnitedKingdom",
  summary: "a Dance project",
  body: "longer body of text to summarize the Dance project",
  creator_id: u3.id,
  deadline: DateTime.new(2018,7,7),
  category: "Dance",
  image: File.open('app/assets/images/dance.jpg'),
  live: true,
  youtube: "https://www.youtube.com/watch?v=2YBtspm8j8M"
)


r1 = Reward.create!(
  project_id: p9.id,
  amount: 1,
  title: "Smallest Reward",
  body: "Thank you for this backing!",
  delivery_date: DateTime.new(2018,5,10)
)

r2 = Reward.create!(
  project_id: p9.id,
  amount: 10,
  title: "Medium Tip",
  body: "Thank you for this medium sized backing!",
  delivery_date: DateTime.new(2018,6,10)
)

r3 = Reward.create!(
  project_id: p9.id,
  amount: 100,
  title: "Large Tip",
  body: "Thank you for this large sized backing!",
  delivery_date: DateTime.new(2018,7,10)
)

r4 = Reward.create!(
  project_id: p10.id,
  amount: 1,
  title: "Small Tip",
  body: "Thank you for this backing!",
  delivery_date: DateTime.new(2018,7,10)
)

r5 = Reward.create!(
  project_id: p8.id,
  amount: 1,
  title: "Smallest Reward",
  body: "Thank you for this backing!",
  delivery_date: DateTime.new(2018,5,10)
)

r6 = Reward.create!(
  project_id: p8.id,
  amount: 10,
  title: "Medium Tip",
  body: "Thank you for this medium sized backing!",
  delivery_date: DateTime.new(2018,03,03)
)

r7 = Reward.create!(
  project_id: p8.id,
  amount: 100,
  title: "Large Tip",
  body: "Thank you for this large sized backing!",
  delivery_date: DateTime.new(2018,7,10)
)
r8 = Reward.create!(
  project_id: p11.id,
  amount: 1,
  title: "Smallest Reward",
  body: "Thank you for this backing!",
  delivery_date: DateTime.new(2018,5,10)
)

r9 = Reward.create!(
  project_id: p12.id,
  amount: 10,
  title: "Medium Tip",
  body: "Thank you for this medium sized backing!",
  delivery_date: DateTime.new(2018,6,10)
)

r10 = Reward.create!(
  project_id: p7.id,
  amount: 100,
  title: "Large Tip",
  body: "Thank you for this large sized backing!",
  delivery_date: DateTime.new(2018,7,10)
)

r11 = Reward.create!(
  project_id: p4.id,
  amount: 10,
  title: "Medium Tip",
  body: "Thank you for this medium sized backing!",
  delivery_date: DateTime.new(2018,7,10)
)

r12 = Reward.create!(
  project_id: p5.id,
  amount: 10,
  title: "Medium Tip",
  body: "Thank you for this medium sized backing!",
  delivery_date: DateTime.new(2018,7,10)
)
r13 = Reward.create!(
  project_id: p6.id,
  amount: 10,
  title: "Medium Tip",
  body: "Thank you for this medium sized backing!",
  delivery_date: DateTime.new(2018,7,10)
)

b1 = Backing.create!(
  reward_id: r1.id,
  user_id: u1.id,
  amount: r1.amount
)

b2 = Backing.create!(
  reward_id: r5.id,
  user_id: u1.id,
  amount: r5.amount
)

b3 = Backing.create!(
  reward_id: r10.id,
  user_id: u1.id,
  amount: r10.amount
)

b4 = Backing.create!(
  reward_id: r4.id,
  user_id: u2.id,
  amount: r4.amount
)
b5 = Backing.create!(
  reward_id: r5.id,
  user_id: u2.id,
  amount: r5.amount
)
b6 = Backing.create!(
  reward_id: r6.id,
  user_id: u2.id,
  amount: r6.amount
)
b7 = Backing.create!(
  reward_id: r7.id,
  user_id: u2.id,
  amount: r7.amount
)
b8 = Backing.create!(
  reward_id: r8.id,
  user_id: u2.id,
  amount: r8.amount
)

b9 = Backing.create!(
  reward_id: r9.id,
  user_id: u2.id,
  amount: r9.amount
)

b10 = Backing.create!(
  reward_id: r10.id,
  user_id: u3.id,
  amount: r10.amount
)
b11 = Backing.create!(
  reward_id: r11.id,
  user_id: u3.id,
  amount: r11.amount
)
b12 = Backing.create!(
  reward_id: r12.id,
  user_id: u3.id,
  amount: r12.amount
)
b13 = Backing.create!(
  reward_id: r13.id,
  user_id: u3.id,
  amount: r13.amount
)
