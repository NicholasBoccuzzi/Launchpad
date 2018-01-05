class Addingdefaultfunding < ActiveRecord::Migration[5.1]
  def change
    change_column :projects, :current_funding, :integer, default: 0
  end
end
