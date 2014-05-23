class AddLatLngToMedidor < ActiveRecord::Migration
  def change
    add_column :medidores, :lat, :float
    add_column :medidores, :lng, :float
  end
end
