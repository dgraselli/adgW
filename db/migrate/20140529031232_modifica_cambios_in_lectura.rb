class ModificaCambiosInLectura < ActiveRecord::Migration
  def change 
  	change_column :lecturas, :incidencias, :text
  	change_column :lecturas, :cambios, :text
  end
end
