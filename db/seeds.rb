# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

City.create([
	{nombre: 'La Plata', sufijo: ',Ar'},
	{nombre: 'Capital Federal', sufijo: ',Ar'},
	])	

Lecturista.create([
	{nombre: 'juan'},
	{nombre: 'pedro'},
	{nombre: 'jose'},
	])	

User.create([
	{name: 'juan', email: 'dgraselli@gmail.com', password: '212121', password_confirmation: '212121', admin: true }
	])	

Incidencia.create([
	{nombre: 'Medidor Tapado'},
	{nombre: 'No se encontro medidor'},
	])
	
