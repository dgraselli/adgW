class AddIdToLecturaHst < ActiveRecord::Migration
  def change
    add_column :lecturas_hst, :id, :serial
    add_index :lecturas_hst, :id, unique: true
  end
end
