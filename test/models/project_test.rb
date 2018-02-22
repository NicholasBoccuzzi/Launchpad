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

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
