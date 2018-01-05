class Project < ApplicationRecord


  def find_by_category(category)
    # Project where project.category is equal to category
  end

  Project
    .where('project.category = ?', category)



end
