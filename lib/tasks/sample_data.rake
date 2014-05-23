namespace :db do
  desc "Fill database with sample data"
  task populate: :environment do
    #make_rutas
    #make_lecturas
    #make_rutas
    #update_rutas
  end

  task update_rutas: :environment do
    Lectura.all.each { |l| l.ruta = "Ruta #{l.usuario[-1]}" }
  end
  
  task delete_lecturas: :environment do
    Lectura.delete_all
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
