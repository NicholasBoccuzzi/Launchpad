class Project < ApplicationRecord



  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  validate :deadline_date_cannot_be_in_the_past
  validates :title, :current_funding, :funding_goal, :summary, :body,
    :creator_id, :deadline, :category, presence: true

  belongs_to :user,
  foreign_key: :creator_id,
  class_name: "User"

  def deadline_date_cannot_be_in_the_past
    if !deadline.blank? and deadline < Date.today
      errors.add(:deadline, "can't be in the past")
    end
  end

  def find_by_category(category)
    projects = Project.where('project.category = ?', category)
    # Project where project.category is equal to category
    return projects
  end

  # Project
  #   .where('project.category = ?', category)



end
