class AddLecturaLatLonToLecturas < ActiveRecord::Migration
  def change
    add_column :lecturas, :lectura_lat, :float
    add_column :lecturas, :lectura_lon, :float
  end
end
