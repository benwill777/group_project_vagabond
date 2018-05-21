class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :description
      t.string :post_photo_url
      t.string :posted_user_name
      t.integer :city_id
      t.references :city, foreign_key: true

      t.timestamps
    end
  end
end
