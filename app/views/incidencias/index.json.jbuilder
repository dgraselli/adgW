json.array!(@incidencias) do |incidencia|
  json.extract! incidencia, :nombre, :requiere_lectura, :dato_requerido, :dato_rexp, :incidencias_incompatibles, :tipo, :id
  #json.url incidencia_url(incidencia, format: :json)
end