class AddPeriodoToLectura < ActiveRecord::Migration
  def change
    add_column :lecturas, :periodo, :int
  end
end
