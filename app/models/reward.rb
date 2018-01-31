# == Schema Information
#
# Table name: rewards
#
#  id            :integer          not null, primary key
#  project_id    :integer          not null
#  amount        :integer          not null
#  title         :string           not null
#  body          :string           not null
#  delivery_date :datetime
#

class Reward < ApplicationRecord

  validates :title, :project_id, :amount, :body, :delivery_date,
  presence: true

  belongs_to :project
  has_many :backings
  has_many :backers,
    through: :backings,
    source: :user_id


end
