class ChangeLecturasDateOnLecturas < ActiveRecord::Migration

  def up
   change_column :lecturas, :lectura_fh_carga, :datetime
   change_column :lecturas, :lectura_fh_toma, :datetime
  end


end
