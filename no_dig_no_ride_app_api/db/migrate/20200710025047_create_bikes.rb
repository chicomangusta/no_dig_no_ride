class CreateBikes < ActiveRecord::Migration[6.0]
  def change
    create_table :bikes do |t|
      t.string :brand
      t.string :name
      t.string :size
      t.string :type
      t.string :suspension
      t.string :shox
      t.string :wheel_size
      t.string :rear_der
      t.string :dropper
      t.date   :year

      t.timestamps
    end
  end
end
