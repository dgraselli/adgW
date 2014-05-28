class Lecturista < ActiveRecord::Base
	validates :nombre, uniqueness: true
end
