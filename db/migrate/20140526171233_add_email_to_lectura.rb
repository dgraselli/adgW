class AddEmailToLectura < ActiveRecord::Migration
  def change
    add_column :lecturas, :email, :string
  end
end
