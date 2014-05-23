class DropLectura < ActiveRecord::Migration
  def change
  	drop_table :lecturas
  end
end
