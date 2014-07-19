namespace :chaca do
  desc "Fill database with sample data"
  task populate: :environment do
    #make_rutas
    #make_lecturas
    #make_rutas
    #update_rutas
  end

  desc "Secuencia cada ruta por calle altura"
  task seq_rutas: :environment do
    Lectura.rutas.each do |ruta|
      Lectura.periodos.each do |periodo|
        Lectura.where(ruta: ruta, periodo: periodo).order(:calle, :altura). each_with_index do |lect, idx|
          lect.update_attribute(:secuencia,  idx)
          puts "#{ruta}-#{periodo} -> #{idx}"

        end
      end
    end
  end
  
  task delete_lecturas: :environment do
    Lectura.delete_all
  end

  desc "Carga valores adeudados aleatorios entre 250 y 3500"
  task set_random_adeudado: :environment do
    Lectura.all.each{|a| a.adeudado = rand(250.00-3250.99) + rand(0.00+0.99).round(2) ; a.save; puts a.adeudado.to_s + "    -"}
  end

  desc "Geocodificar ausentes por lecturista"
  task :geocodificar_faltante, [:lecturista] => :environment  do |task, args|
    lecturas = Lectura.where(:lat => nil)
    if args[:lecturista].present?
      lecturas = lecturas.where(lecturista: Lecturista.find_by_nombre(args[:lecturista]))
    end
    lecturas.each{|a| a.geocode; a.save; puts "#{a.usuario} (#{a.direccion}) : #{a.latlon}"}
  end

  desc "Geocodificar edificios"
  task :geocodificar_edificios, [:uh] => :environment  do |task, args|
    direcciones = Direccion.where(:lat => nil)
    if args[:uh].present?
      direcciones = direcciones.where("cant_unidades >= ?", args[:uh])
    else
      direcciones = direcciones.where("cant_unidades >= 10")
    end
    puts direcciones.count 
    direcciones.each{|a| a.geocode; a.save; puts "(#{a.direccion_geo}) : #{a.latlon}"}
  end

  desc "Geocodificar medidos"
  task :geocodificar_medidos => :environment  do |task, args|
    unidades = Unidad.where(:lat => nil)
    unidades = Unidad.where('mn=?','Z')
    puts unidades.count
    unidades.each{|a| a.geocode; a.save; puts "(#{a.direccion_geo}) : #{a.latlon}"}
  end


  desc "Geocodificar medidos ph"
  task :geocodificar_medidos_ph => :environment  do |task, args|
    unidades = Unidad.medidos_ph.where(:lat => nil)
    puts unidades.count
    unidades.each{|a| a.geocode; a.save; puts "(#{a.direccion_geo}) : #{a.latlon}"}
  end


  desc "Normalizar"
  task :normalizar => :environment  do 
    lecturas = Lectura.where(lectura_valor: nil).update_all(estado: 'Nueva')
    lecturas = Lectura.where(ruta: nil).delete_all
    lecturas = Lectura.where(periodo: nil).delete_all
  end


end

def make_users
  admin = User.create!(name:     "Example User",
                       email:    "example@railstutorial.org",
                       password: "foobar",
                       password_confirmation: "foobar",
                       admin: true)
  99.times do |n|
    name  = Faker::Name.name
    email = "example-#{n+1}@railstutorial.org"
    password  = "password"
    User.create!(name:     name,
                 email:    email,
                 password: password,
                 password_confirmation: password)
  end
end



def make_rutas
  Rutum.delete_all

  cant_rutas = Medidor.count / 300
  cant_x_ruta = Medidor.count / cant_rutas

  puts "Medidores #{Medidor.count}"
  puts "Cant rutas: #{cant_rutas}"
  puts "Cant por ruta: #{cant_x_ruta}"
  puts


  (cant_rutas).round.times do |idx|
    
    nombre =  "Ruta #{idx}"
    r = Rutum.create!(
      nombre:  nombre,
      localidad:    "La Plata",
      orden: idx
    )
    puts r.nombre

    Medidor.where('rutum_id is null').order(:ub_calle, :ub_altura).limit(cant_x_ruta).each do |m|
      m.rutum = r
      m.save
      puts " ----> " + m.codigo_interno
    end

  end
  
end
