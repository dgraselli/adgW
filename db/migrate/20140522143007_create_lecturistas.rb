class CreateLecturistas < ActiveRecord::Migration
  def change
    create_table :lecturistas do |t|
      t.string :nombre

      t.timestamps
    end
  end
end
