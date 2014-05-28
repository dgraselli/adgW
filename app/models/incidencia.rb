class Incidencia < ActiveRecord::Base
	validate :nombre, uniqueness: true
end
