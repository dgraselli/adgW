class AddPlanCambiosToLectura < ActiveRecord::Migration
  def change
    add_column :lecturas, :plan_id, :integer
    add_column :lecturas, :cambios, :string
  end
end
