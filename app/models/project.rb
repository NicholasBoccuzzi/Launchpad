class Project < ApplicationRecord

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

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
