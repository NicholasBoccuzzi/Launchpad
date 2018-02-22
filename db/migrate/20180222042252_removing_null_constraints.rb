class RemovingNullConstraints < ActiveRecord::Migration[5.1]
  def change
    change_column :projects, :title, :string, :null => true, :default => "untitled"
    change_column :projects, :current_funding, :integer, :null => true
    change_column :projects, :funding_goal, :integer, :null => true
    change_column :projects, :body, :string, :null => true
    change_column :projects, :deadline, :datetime, :null => true
  end
end
