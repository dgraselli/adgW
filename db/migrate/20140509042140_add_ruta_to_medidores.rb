class AddRutaToMedidores < ActiveRecord::Migration
  def change
    add_reference :medidores, :rutum, index: true
  end
end
