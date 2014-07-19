class Direccion < ActiveRecord::Base
	self.table_name = 'direcciones'

	geocoded_by :direccion_geo, :latitude => :lat, :longitude => :lon


  scope :edificios, where("cant_unidades > 10")

  def direccion_geo
    "#{calle} #{numero}, La Plata, Ar"
  end

    def latlon
    "#{lat},#{lon}"
  end



  def unidades
  	Unidad.where(calle: calle, numero: numero).map{|a| {
      unidad: a.unidad,
  		razon: a.razon,
  		piso: a.piso,
  		depto: a.depto,
  		consumo_promedio: a.consumo_promedio,
  		cod_ser: a.cod_ser,
  		parcela: a.parcela,
  		subparcela: a.subparcela,
  		vf: a.vf,
  		mn: a.mn,
  		}}
  end

end
