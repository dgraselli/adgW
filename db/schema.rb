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

ActiveRecord::Schema.define(version: 20140525085748) do

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

  add_index "delayed_jobs", ["priority", "run_at"], name: "delayed_jobs_priority"

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
    t.string   "incidencias"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "periodo"
    t.string   "ruta"
    t.integer  "lecturista_id"
    t.string   "estado"
    t.integer  "secuencia"
    t.float    "lectura_lat"
    t.float    "lectura_lon"
  end

  add_index "lecturas", ["lecturista_id"], name: "index_lecturas_on_lecturista_id"

# Could not dump table "lecturas_hst" because of following NoMethodError
#   undefined method `[]' for nil:NilClass

  create_table "lecturistas", force: true do |t|
    t.string   "nombre"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "medidores", id: false, force: true do |t|
    t.integer  "idactivo"
    t.text     "codigo_interno"
    t.text     "descripcion"
    t.text     "tipo"
    t.text     "estado"
    t.integer  "idactivo_1"
    t.integer  "ub_id"
    t.datetime "fecha_ini"
    t.datetime "fecha_fin"
    t.integer  "ub_id_1"
    t.text     "ub_descripcion"
    t.integer  "procesoid"
    t.integer  "ub_idcalle"
    t.text     "ub_calle"
    t.integer  "ub_altura"
    t.text     "ub_entre"
    t.text     "ub_y"
    t.text     "ub_tipo"
    t.integer  "ub_padre"
    t.integer  "ub_idlocalidad"
    t.text     "ub_dpto"
    t.integer  "unidad"
    t.float    "lat"
    t.float    "lng"
    t.integer  "rutum_id"
    t.integer  "city_id"
  end

  add_index "medidores", ["city_id"], name: "index_medidores_on_city_id"
  add_index "medidores", ["codigo_interno"], name: "idx_medidores_lookup"
  add_index "medidores", ["rutum_id"], name: "index_medidores_on_rutum_id"

  create_table "ruta", force: true do |t|
    t.string   "nombre"
    t.string   "localidad"
    t.integer  "orden"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "unidades", id: false, force: true do |t|
    t.integer  "unidad"
    t.text     "unidad_alt"
    t.text     "razon"
    t.integer  "usuario"
    t.text     "zona"
    t.text     "calle"
    t.integer  "numero"
    t.text     "piso"
    t.text     "depto"
    t.text     "dat_complem"
    t.text     "locali"
    t.integer  "cod_pos"
    t.text     "seccion"
    t.text     "manzana"
    t.text     "parcela"
    t.text     "subparcela"
    t.text     "uni_fun"
    t.text     "cod_edi"
    t.text     "nom_edi"
    t.integer  "dir_env"
    t.integer  "dir_cob"
    t.text     "reparto"
    t.text     "ruta_dis"
    t.text     "tpo_doc"
    t.integer  "num_doc"
    t.text     "tpo_iva"
    t.decimal  "por_gra"
    t.text     "cuenta"
    t.text     "ite_agr"
    t.integer  "nro_calle"
    t.datetime "ult_act"
    t.text     "usu_act"
    t.text     "situacion"
    t.text     "usu_sit"
    t.datetime "fec_sit"
    t.text     "cortable"
    t.text     "lec_obl"
    t.text     "rep_obl"
    t.text     "telefono"
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
