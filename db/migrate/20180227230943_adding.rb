class Adding < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :biography, :string
    add_column :users, :timezone, :string
    add_column :users, :websites, :string
  end
end
