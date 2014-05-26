class AddAdeudadoToLectura < ActiveRecord::Migration
  def change
    add_column :lecturas, :adeudado, :float
  end
end
