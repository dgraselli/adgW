json.array!(@edificios) do |edificio|
  json.extract! edificio, :calle, :altura, :cant_uh, :lat, :lon
  json.url edificio_url(edificio, format: :json)
end