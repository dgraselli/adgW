class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.float :lat
      t.float :lon
      t.references :user, index: true

      t.timestamps
    end
  end
end
