class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.integer :current_funding, null: false
      t.integer :funding_goal, null: false
      t.boolean :funded, default: false
      t.string :summary, null: false
      t.string :body, null: false
      t.integer :creator_id, null: false
      t.datetime :deadline, null: false
      t.string :category, null: false
      t.string :subcategory
      t.timestamps
    end
    add_index :projects, :title, unique: true
    add_index :projects, :category
  end
end
