class Project < ApplicationRecord

  validates :title, :current_funding, :funding_goal, :summary, :body,
    :creator_id, :deadline, :category, presence: true

  belongs_to :user,
  foreign_key: :creator_id,
  class_name: "User"

  def find_by_category(category)
    projects = Project.where('project.category = ?', category)
    # Project where project.category is equal to category
    return projects
  end

  # Project
  #   .where('project.category = ?', category)



end
