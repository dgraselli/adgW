class AddEstadoToLectura < ActiveRecord::Migration
  def change
    add_column :lecturas, :estado, :string
  end
end
