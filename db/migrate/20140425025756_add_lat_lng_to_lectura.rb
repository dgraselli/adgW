class AddLatLngToLectura < ActiveRecord::Migration
  def change
    add_column :lecturas, :lat, :decimal
    add_column :lecturas, :lng, :decimal
  end
end
