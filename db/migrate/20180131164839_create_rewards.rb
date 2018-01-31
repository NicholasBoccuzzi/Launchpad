class CreateRewards < ActiveRecord::Migration[5.1]
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.integer :amount, null: false
      t.string :title, null: false
      t.string :body, null: false
      t.datetime :delivery_date
    end
  end
end
