json.array!(@lecturas) do |lectura|
  json.extract! lectura, :usuario, :razon_social, :doc_tipo, :doc_nro, :localidad, :calle, :altura, :piso, :dpto, :datos_comp, :cp, :situacion, :telefono, :medidor_tipo, :medidor_num, :medidor_f_alta, :lectura_valor, :lectura_fh_toma, :lectura_fh_carga, :lat, :lon, :incidencias
  json.url lectura_url(lectura, format: :json)
end