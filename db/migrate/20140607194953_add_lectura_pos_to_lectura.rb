class AddLecturaPosToLectura < ActiveRecord::Migration
  def change
    remove_column :lecturas, :pos
    add_column :lecturas, :lectura_pos, :string
  end
end
