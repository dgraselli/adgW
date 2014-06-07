class AddAccuracyAndPosToLectura < ActiveRecord::Migration
  def change
    add_column :lecturas, :accuracy, :float
    add_column :lecturas, :pos, :string
  end
end
