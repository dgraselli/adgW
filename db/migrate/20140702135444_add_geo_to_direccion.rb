class AddGeoToDireccion < ActiveRecord::Migration
  def change
    add_column :direcciones, :rel_lat, :float
    add_column :direcciones, :rel_lon, :float
  end
end
