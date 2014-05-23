json.array!(@incidencias) do |incidencia|
  json.extract! incidencia, :nombre
  json.url incidencia_url(incidencia, format: :json)
end