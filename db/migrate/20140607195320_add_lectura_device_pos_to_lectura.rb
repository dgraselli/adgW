class AddLecturaDevicePosToLectura < ActiveRecord::Migration
  def change
    remove_column :lecturas, :device
    add_column :lecturas, :lectura_device, :string
  end
end
