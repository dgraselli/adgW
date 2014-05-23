class LecturaHst < ActiveRecord::Base
  self.table_name = :lecturas_hst
  self.primary_key = :id
  belongs_to :medidor, foreign_key: :num_med



  def leida?
    ! consumo.nil?
  end

  def texto
    "Unidad #{unidad}"
  end

  def denominacion
    medidor.unidad.razon unless medidor.nil? or medidor.unidad.nil?
  end
end
