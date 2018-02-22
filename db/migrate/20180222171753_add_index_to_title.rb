class AddIndexToTitle < ActiveRecord::Migration[5.1]
  def change
    add_index :projects, :title
  end
end
