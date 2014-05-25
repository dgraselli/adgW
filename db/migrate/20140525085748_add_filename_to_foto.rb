class AddFilenameToFoto < ActiveRecord::Migration
  def change
    add_column :fotos, :filename, :string
    add_column :fotos, :mime_type, :string
    add_column :fotos, :name, :string
  end
end
