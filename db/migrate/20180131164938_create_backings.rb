class CreateBackings < ActiveRecord::Migration[5.1]
  def change
    create_table :backings do |t|
      t.integer :reward_id, null: false
      t.integer :user_id, null: false
      t.integer :amount, null: false
    end
  end
end
