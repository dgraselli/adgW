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

ActiveRecord::Schema.define(version: 20140607192821) do

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
    t.float    "accuracy"
    t.string   "pos"
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
  end

  add_index "tracks", ["user_id"], name: "index_tracks_on_user_id", using: :btree

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
