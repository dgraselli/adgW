class Unidad < ActiveRecord::Base
	self.table_name = :unidades
	self.primary_key= :unidad

	has_one :medidor, foreign_key: :unidad 

	def id
		unidad
	end
end
