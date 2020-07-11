class CreateBrands < ActiveRecord::Migration[6.0]
  def change
    create_table :brands do |t|
      t.string :Intense
      t.string :Cannondale
      t.string :Evil
      t.string :Transition
      t.string :Specialized

      t.timestamps
    end
  end
end
