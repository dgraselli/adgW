class AddDevicePosToLectura < ActiveRecord::Migration
  def change
    add_column :lecturas, :device, :string
  end
end
