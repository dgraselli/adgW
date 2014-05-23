class CreateIncidencia < ActiveRecord::Migration
  def change
    create_table :incidencia do |t|
      t.string :nombre

      t.timestamps
    end
  end
end
