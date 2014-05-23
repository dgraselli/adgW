class RutaController < ApplicationController
	  before_action :set_periodo, only: [:index]


	def index
		@rutas = Lectura.select( "distinct ruta").paginate(page: params[:page])
	end

	def periodos
		@rutas = Lectura.group(:periodo).count.paginate(page: params[:page])
	end

	private

	def set_periodo
		@periodo = params[:periodo]
	end
end
