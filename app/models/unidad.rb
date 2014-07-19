class Unidad < ActiveRecord::Base
	self.table_name = 'unidades'
	self.primary_key = 'unidad'

 	default_scope where('situacion <> ?', 'BA')

	#has_many: UnidadLecturas

	geocoded_by :direccion_geo, :latitude => :lat, :longitude => :lon

  scope :medidos, where("substr(cod_ser,1,1)='Z'")
  scope :medidos_ph, where("substr(cod_ser,1,1)='Z' AND substr(cod_ser,4,1)='3'")
  
  def direccion_geo
    "#{calle} #{numero}, La Plata, Ar"
  end

    def latlon
    "#{lat},#{lon}"
  end

  def consumo_promedio
  	UnidadLecturas.where(unidad: unidad).average(:lectura_consumo)
  end




end