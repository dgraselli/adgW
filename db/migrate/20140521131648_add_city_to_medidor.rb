class AddCityToMedidor < ActiveRecord::Migration
  def change
    add_reference :medidores, :city, index: true
  end
end
