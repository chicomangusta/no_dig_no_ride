class CreateComponents < ActiveRecord::Migration[6.0]
  def change
    create_table :components do |t|
      t.string :name
      t.string :size
      t.string :susp
      t.string :shox
      t.string :wheel_size
      t.string :rear_der
      t.string :dropper
      t.integer :year

      t.timestamps
    end
  end
end
