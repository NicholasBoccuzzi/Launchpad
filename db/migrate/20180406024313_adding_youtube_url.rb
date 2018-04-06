class AddingYoutubeUrl < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :youtube, :string
  end
end
