class Lectura < ActiveRecord::Base
  belongs_to :lecturista
  has_many :fotos
  
  geocoded_by :direccion_geo, :latitude => :lat, :longitude => :lon
  #after_validation :geocode, :if => :address_changed?
  #after_validation :geocode, if: ->(obj){ ! obj.lat.present? and obj.direccion.present? and obj.address_changed? }

  after_initialize :default_values

  before_save :set_estado, :set_consumo

 

  def self.search(params)
    r = all

    logger.debug params

    if params[:razon_social]
      r = r.where('razon_social LIKE ?', "%#{search}%")
    end
           
    if params[:ruta].present?
      r = r.where(ruta: params[:ruta])
    end
    
    if params[:periodo].present?
      r = r.where(periodo: params[:periodo])
    end

    if(params[:lecturista_id].present?)
      r = r.where(lecturista_id: params[:lecturista_id])
    end

     #@estado_cantidad = {:Todos => @lecturas.count}.merge @lecturas.group(:estado).count 

    if(params[:estado].present? and params[:estado] != "Todos")
      r = r.where(estado: params[:estado])
    elsif
      params[:estado] = "Todos"
    end

    r
  end


  
  def self.periodos
    Lectura.order(:periodo).pluck('distinct periodo')
  end

  def self.periodos_pendientes
    #Lectura.where(lectura_valor: nil ).order(:periodo).pluck('distinct periodo')
    Lectura.all.order(:periodo).pluck('distinct periodo')
  end
  
  def self.rutas
    Lectura.order(:ruta).pluck('distinct ruta')
  end
  


  def self.historico_consumo_ruta(ruta)
    Lectura.where(ruta: ruta).group(:periodo).order(:periodo).sum(:lectura_consumo)
  end

  def historico_consumo
    Lectura.where(medidor_tipo: medidor_tipo, medidor_num: medidor_num).group(:periodo).order(:periodo).sum(:lectura_consumo)
  end

  def historico_lectura
    Lectura.where(medidor_tipo: medidor_tipo, medidor_num: medidor_num).group(:periodo).order(:periodo).maximum(:lectura_valor)
  end

  def direccion_geo
    "#{calle} #{altura}, #{localidad}, Ar"
  end

  def direccion
    "#{calle} N° #{altura}"
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

  def denominimumacion
    razon_social 
  end

  def rango_valido
    [1,99]
  end

  def latlon
    "#{lat},#{lon}  (#{lectura_lat},#{lectura_lon})"
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

  def plan_de_pago
    deuda[:planes].select{|x| x[:id] == plan_id}[0][:desc] if plan_id.present?
  end

  def periodo_str
    "#{periodo.to_s[0..3]}-#{periodo.to_s[4..5]}"
  end

  def lectura_previa
    last_lectura = Lectura.where("medidor_tipo=? and medidor_num=? and id <> ? ",medidor_tipo, medidor_num, id ).order(:lectura_fh_carga).last
    
    last_lectura ? last_lectura.lectura_valor : 0
  end

  def historico_de_fotos_del_medidor
    fotos = []
    Lectura.where(medidor_tipo: medidor_tipo, medidor_num: medidor_num).map do |lect|
      fotos = fotos + lect.fotos.to_a if lect.fotos.count > 0
    end
    fotos
  end

private
    def default_values
      estado ||= "Nueva"
    end

    def set_estado
      self.estado = self.lectura_valor.present? ? 'Leida' : 'Nueva'
    end

    def set_consumo
      self.lectura_consumo = self.lectura_valor - self.lectura_previa.to_f  if self.lectura_valor.present?
    end
end
