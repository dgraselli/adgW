class CreateDireccions < ActiveRecord::Migration
  def change
    create_table :direcciones do |t|
      t.string :calle
      t.integer :numero
      t.integer :cant_unidades
      t.integer :cant_unidades_relevadas
      t.float :lat
      t.float :lon

      t.timestamps
    end
  end
end
