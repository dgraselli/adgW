class CreateLecturas < ActiveRecord::Migration
  def change
    create_table :lecturas do |t|
      t.integer :usuario
      t.string :razon_social
      t.string :doc_tipo
      t.string :doc_nro
      t.string :localidad
      t.string :calle
      t.string :altura
      t.string :piso
      t.string :dpto
      t.string :datos_comp
      t.integer :cp
      t.string :situacion
      t.string :telefono
      t.string :medidor_tipo
      t.string :medidor_num
      t.date :medidor_f_alta
      t.integer :lectura_valor
      t.date :lectura_fh_toma
      t.date :lectura_fh_carga
      t.float :lat
      t.float :lon
      t.string :incidencias

      t.timestamps
    end
  end
end
