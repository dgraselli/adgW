class AddDevicePosToTrack < ActiveRecord::Migration
  def change
    add_column :tracks, :device, :string
    add_column :tracks, :pos, :string
  end
end
