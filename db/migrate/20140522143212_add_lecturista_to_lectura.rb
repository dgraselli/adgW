class AddLecturistaToLectura < ActiveRecord::Migration
  def change
    add_reference :lecturas, :lecturista, index: true
  end
end
