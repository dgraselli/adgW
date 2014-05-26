class Lectura < ActiveRecord::Base
  belongs_to :lecturista
  has_many :fotos
  
  geocoded_by :direccion, :latitude => :lat, :longitude => :lon
  #after_validation :geocode, :if => :address_changed?

  after_initialize :default_values

  
  def self.periodos
    Lectura.pluck('distinct periodo')
  end

  def self.periodos_pendientes
    Lectura.where(lectura_valor: nil ).pluck('distinct periodo')
  end
  
  def self.rutas
    Lectura.pluck('distinct ruta')
  end
  

  def direccion
    "#{calle} #{altura}, #{localidad}, Ar"
  end

  def address_changed?
    calle_changed? or altura_changed? or localidad.changed?
  end

  def leida?
    ! lectura_valor.nil?
  end

  def texto
    "Usuario #{usuario}"
  end

  def denominacion
    razon_social 
  end

  def rango_valido
    [1,99]
  end

  def deuda
    if ! adeudado 
      return
    end

    planes = []
    planes << {id: id*100, desc: "1 pago de $#{adeudado}"}
    [3,12].each{|cant_cuotas|
       anticipo = (adeudado * 0.3).round
       valor_cuota = (adeudado - anticipo) / cant_cuotas
       planes << {id: id*100+cant_cuotas,desc: "Ant. #{'$%.2f' % anticipo} y #{cant_cuotas} cuotas de #{'$%.2f' % valor_cuota}"}
    }

    {monto: adeudado,
      planes: planes
    }
  end

private
    def default_values
      estado ||= "Nueva"
    end

end
