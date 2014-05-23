class AddRutaToLectura < ActiveRecord::Migration
  def change
    add_column :lecturas, :ruta, :string
  end
end
