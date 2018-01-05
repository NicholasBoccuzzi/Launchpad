@projects.each do |project|
  json.set! project.id do
    json.partial project, :id, :title, :current_funding, :funding_goal,
      :funded, :summary, :body, :creator_id, :deadline, :category, :subcategory
  end
end
