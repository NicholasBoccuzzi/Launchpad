class RemoveLocationRequirement < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :location, :string, :null => true
  end
end
