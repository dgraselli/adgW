class Rutum < ActiveRecord::Base
  has_many :medidores,  class_name: "Medidor" #, foreign_key: "ruta_id"


  def to_s
    nombre
  end


  def georeferenciar_medidores(rutum_id)
    rutum = Rutum.find(rutum_id)
    medidores_sin_g = rutum.medidores.where('lat is null')

    idx = 0
    medidores_sin_g.each do |m|
      idx += 1
      m.geocode
      m.save

      pg = (idx / medidores_sin_g.count * 100).round
      
      job = Delayed::Job.last
      job.update_attribute( :progres,  pg ) # if pg % 0.01 == 0
      puts "-- #{job.progres}"

    end
  end
  handle_asynchronously :georeferenciar_medidores


  def nueva_instancia
    medidores.each do |m|
      m.lecturas_hst.create()
    end
  end
end
