# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140702135444) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: true do |t|
    t.string   "nombre"
    t.string   "sufijo"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "delayed_jobs", force: true do |t|
    t.integer  "priority",   default: 0, null: false
    t.integer  "attempts",   default: 0, null: false
    t.text     "handler",                null: false
    t.text     "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string   "locked_by"
    t.string   "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "progres"
  end

  add_index "delayed_jobs", ["priority", "run_at"], name: "delayed_jobs_priority", using: :btree

  create_table "direcciones", force: true do |t|
    t.string  "calle",                   limit: 40
    t.integer "numero"
    t.integer "cant_unidades",           limit: 8
    t.float   "lat"
    t.float   "lon"
    t.integer "cant_unidades_relevadas"
    t.float   "rel_lat"
    t.float   "rel_lon"
  end

  create_table "edificios", force: true do |t|
    t.string   "calle"
    t.integer  "altura"
    t.integer  "cant_uh"
    t.float    "lat"
    t.float    "lon"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "fotos", force: true do |t|
    t.string   "usuario_id"
    t.string   "lectura_id"
    t.binary   "foto"
    t.string   "obs"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "filename"
    t.string   "mime_type"
    t.string   "name"
  end

  create_table "incidencia", force: true do |t|
    t.string   "nombre"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "incidencias", force: true do |t|
    t.string   "nombre"
    t.boolean  "requiere_lectura"
    t.string   "dato_requerido"
    t.string   "dato_rexp"
    t.string   "incidencias_incompatibles"
    t.string   "tipo"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "lecturas", force: true do |t|
    t.integer  "usuario"
    t.string   "razon_social"
    t.string   "doc_tipo"
    t.string   "doc_nro"
    t.string   "localidad"
    t.string   "calle"
    t.string   "altura"
    t.string   "piso"
    t.string   "dpto"
    t.string   "datos_comp"
    t.integer  "cp"
    t.string   "situacion"
    t.string   "telefono"
    t.string   "medidor_tipo"
    t.string   "medidor_num"
    t.date     "medidor_f_alta"
    t.integer  "lectura_valor"
    t.datetime "lectura_fh_toma"
    t.datetime "lectura_fh_carga"
    t.float    "lat"
    t.float    "lon"
    t.text     "incidencias"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "periodo"
    t.string   "ruta"
    t.integer  "lecturista_id"
    t.string   "estado"
    t.integer  "secuencia"
    t.float    "lectura_lat"
    t.float    "lectura_lon"
    t.float    "adeudado"
    t.string   "email"
    t.integer  "plan_id"
    t.text     "cambios"
    t.float    "lectura_consumo"
    t.float    "lectura_accuracy"
    t.string   "lectura_pos"
    t.string   "lectura_device"
  end

  add_index "lecturas", ["lecturista_id"], name: "index_lecturas_on_lecturista_id", using: :btree

  create_table "lecturistas", force: true do |t|
    t.string   "nombre"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tracks", force: true do |t|
    t.float    "lat"
    t.float    "lon"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "device"
    t.string   "pos"
  end

  add_index "tracks", ["user_id"], name: "index_tracks_on_user_id", using: :btree

  create_table "unidades", id: false, force: true do |t|
    t.integer  "unidad",      limit: 8
    t.string   "unidad_alt",  limit: 20
    t.string   "razon",       limit: 50
    t.string   "situacion",   limit: 4
    t.string   "seccion",     limit: 8
    t.string   "locali",      limit: 8
    t.string   "calle",       limit: 40
    t.integer  "numero"
    t.string   "piso",        limit: 2
    t.string   "depto",       limit: 4
    t.string   "manzana",     limit: 8
    t.string   "parcela",     limit: 8
    t.string   "subparcela",  limit: 4
    t.string   "uni_fun",     limit: 3
    t.string   "val_atr_0",   limit: 50
    t.string   "val_atr_1",   limit: 50
    t.string   "vf",          limit: 50
    t.string   "sup",         limit: 50
    t.string   "a10",         limit: 50
    t.string   "a11",         limit: 50
    t.string   "a16",         limit: 50
    t.string   "dat_complem", limit: 40
    t.string   "cod_ser",     limit: 4
    t.string   "cod_con",     limit: 2
    t.string   "ser_bas",     limit: 4
    t.datetime "fec_vig"
    t.string   "cod_edif",    limit: 40
    t.text     "mn"
    t.string   "zona",        limit: 8
    t.float    "lat"
    t.float    "lon"
  end

  create_table "unidades_lecturas", id: false, force: true do |t|
    t.string   "ruta",             limit: 45
    t.decimal  "periodo",                     precision: 21, scale: 0
    t.integer  "secuencia"
    t.string   "razon_social",     limit: 50
    t.string   "doc_tipo",         limit: 4
    t.integer  "doc_nro",          limit: 8
    t.string   "localidad",        limit: 40
    t.string   "calle",            limit: 40
    t.integer  "altura"
    t.string   "datos_comp",       limit: 40
    t.integer  "cp"
    t.string   "situacion",        limit: 4
    t.string   "telefono",         limit: 20
    t.string   "medidor_tipo",     limit: 4
    t.string   "medidor_num",      limit: 10
    t.datetime "medidor_f_alta"
    t.float    "lectura_valor"
    t.datetime "lectura_fh_toma"
    t.datetime "lectura_fh_carga"
    t.float    "lectura_consumo"
    t.integer  "adeudado"
    t.integer  "unidad",           limit: 8
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.boolean  "admin"
    t.string   "remember_token"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
