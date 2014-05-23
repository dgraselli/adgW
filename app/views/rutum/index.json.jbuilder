json.array!(@ruta) do |rutum|
  json.extract! rutum, :nombre, :localidad, :orden
  json.url rutum_url(rutum, format: :json)
end