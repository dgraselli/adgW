class Medidor < ActiveRecord::Base
    belongs_to :unidad,  foreign_key: :unidad 
    belongs_to :rutum
    belongs_to :city
    has_many :lecturas_hst, class_name: :LecturaHst, foreign_key: :num_med

	geocoded_by :address, :latitude => :lat, :longitude => :lng
	after_validation :geocode, :if => :address_changed?

	self.table_name = :medidores
	self.primary_key = :codigo_interno

	def address
		"#{ub_calle} #{ub_altura}, La Plata, Ar"
	end

	def address_changed?
		ub_calle_changed? or ub_altura_changed?
	end
end