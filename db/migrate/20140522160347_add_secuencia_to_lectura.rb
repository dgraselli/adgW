class AddSecuenciaToLectura < ActiveRecord::Migration
  def change
    add_column :lecturas, :secuencia, :int
  end
end
