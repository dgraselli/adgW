json.array!(@cities) do |city|
  json.extract! city, :nombre, :sufijo
  json.url city_url(city, format: :json)
end