class CreateIncidencias < ActiveRecord::Migration
  def change
    create_table :incidencias do |t|
      t.string :nombre

      t.timestamps
    end
  end
end
