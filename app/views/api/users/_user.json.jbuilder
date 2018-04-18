json.id user.id
json.username user.username
json.email user.email
json.image asset_path(user.image.url)
json.projects user.projects
json.joindate user.created_at
json.location user.location
json.biography user.biography

# json.user do
#   json.id user.id
#   json.username user.username
# end
#
# {
#   id: "5",
#   username: "TheCoolGuy"
# }
