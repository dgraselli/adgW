class RutaController < ApplicationController
	  before_action :set_periodo, only: [:index]
	  before_action :set_periodo_y_ruta, only: [:asingar]


	def periodos
		@rutas = Lectura.group(:periodo).count.paginate(page: params[:page])
	end

	def index
		@rutas = Lectura.select(:ruta).where(periodo: @periodo).group(:ruta).paginate(page: params[:page])
	end

	def asignar
		@periodo = params[:periodo]
		@ruta = params[:ruta]

		lecturista = params[:lecturista]

		Lectura.where({periodo: @periodo, ruta: @ruta}).update_all(lecturista_id: lecturista)

		redirect_to :action => :index, params: params

	end


	private

	def set_periodo
		@periodo = params[:periodo]
	end


end
