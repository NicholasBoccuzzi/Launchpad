# == Schema Information
#
# Table name: projects
#
#  id                 :integer          not null, primary key
#  title              :string           default("untitled")
#  current_funding    :integer          default(0)
#  funding_goal       :integer
#  funded             :boolean          default(FALSE)
#  summary            :string           not null
#  body               :string
#  creator_id         :integer          not null
#  deadline           :datetime
#  category           :string           not null
#  subcategory        :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  live               :boolean          default(FALSE)
#  location           :string
#

class Project < ApplicationRecord
  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  # validate :everythingIsFilled
  # validate :deadline_date_cannot_be_in_the_past
  validates :summary, :location, :creator_id, presence: true

  belongs_to :user,
  foreign_key: :creator_id,
  class_name: "User"

  has_many :rewards
  has_many :backers,
    through: :rewards,
    source: :backers


  accepts_nested_attributes_for :rewards

  def deadline_date_cannot_be_in_the_past
    if !deadline.blank? and deadline < Date.today
      errors.add(:deadline, "can't be in the past")
    end
  end

  def everythingIsFilled
    if title == ""
      errors.add(:title, "Title can't be blank")
    elsif funding_goal <= 100
      errors.add(:funding_goal, "must be more than $100")
    elsif summary == ""
      errors.add(:summary, "Summary can't be blank")
    elsif body == ""
      errors.add(:body, "Body can't be blank")
    elsif deadline.blank?
      errors.add(:deadline, "Deadline must be filled in")
    elsif category == "--" || category == ""
      errors.add(:category, "Your project must have a category")
    end
  end


  def self.find_by_category(category)
    projects = Project.where('project.category = ?', category)
    # Project where project.category is equal to category
    return projects
  end

  # Project
  #   .where('project.category = ?', category)



end
