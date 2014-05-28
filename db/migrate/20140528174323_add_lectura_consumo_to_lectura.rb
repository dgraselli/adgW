class AddLecturaConsumoToLectura < ActiveRecord::Migration
  def change
    add_column :lecturas, :lectura_consumo, :float
  end
end
