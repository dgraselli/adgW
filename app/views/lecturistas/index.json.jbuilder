json.array!(@lecturistas) do |lecturista|
  json.extract! lecturista, :nombre
  json.url lecturista_url(lecturista, format: :json)
end