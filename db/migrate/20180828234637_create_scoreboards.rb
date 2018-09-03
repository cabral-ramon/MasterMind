class CreateScoreboards < ActiveRecord::Migration[5.2]
  def change
    create_table :scoreboards do |t|
      t.integer :score, null: false
      t.string :player, null: false

      t.timestamps
    end
  end
end
