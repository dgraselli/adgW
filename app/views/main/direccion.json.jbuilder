json.array!(@unidades) do |u|
  json.extract! u, 
  	:piso, 
  	:depto, 
  	:unidad, 
  	:razon, 
  	:consumo_promedio,
  	:cod_ser
  json.url lectura_url(u, format: :json)
end