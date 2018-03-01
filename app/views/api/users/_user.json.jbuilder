json.id user.id
json.username user.username
json.image asset_path(user.image.url)
json.projects user.projects
json.joindate user.created_at
json.location user.location

# json.user do
#   json.id user.id
#   json.username user.username
# end
#
# {
#   id: "5",
#   username: "TheCoolGuy"
# }
