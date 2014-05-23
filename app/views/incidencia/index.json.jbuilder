json.array!(@incidencia) do |incidencium|
  json.extract! incidencium, :nombre
  json.url incidencium_url(incidencium, format: :json)
end