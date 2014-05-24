class CreateIncidencias < ActiveRecord::Migration
  def change
    drop_table :incidencias
    
    create_table :incidencias do |t|
      t.string :nombre
      t.boolean :requiere_lectura
      t.string :dato_requerido
      t.string :dato_rexp
      t.string :incidencias_incompatibles
      t.string :tipo

      t.timestamps
    end
  end
end
