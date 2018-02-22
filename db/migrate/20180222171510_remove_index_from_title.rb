class RemoveIndexFromTitle < ActiveRecord::Migration[5.1]
  def change
    remove_index :projects, :title
  end
end
