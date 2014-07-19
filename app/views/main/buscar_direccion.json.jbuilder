json.array!(@direcciones) do |u|
  json.extract! u, 
  	:calle, 
  	:numero, 
  	:cant_unidades,
  	:unidades
  json.url lectura_url(u, format: :json)
end