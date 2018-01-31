# == Schema Information
#
# Table name: backings
#
#  id        :integer          not null, primary key
#  reward_id :integer          not null
#  user_id   :integer          not null
#  amount    :integer          not null
#

class Backing < ApplicationRecord

  belongs_to :reward
  belongs_to :backer
    foreign_key: :user_id
    class_name: "User"

end
