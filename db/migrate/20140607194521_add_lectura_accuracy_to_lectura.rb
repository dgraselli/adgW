class AddLecturaAccuracyToLectura < ActiveRecord::Migration
  def change
    remove_column :lecturas, :accuracy
    add_column :lecturas, :lectura_accuracy, :float
  end
end
