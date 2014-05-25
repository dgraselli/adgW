class CreateFotos < ActiveRecord::Migration
  def change
    create_table :fotos do |t|
      t.string :usuario_id
      t.string :lectura_id
      t.binary :foto
      t.string :obs

      t.timestamps
    end
  end
end
