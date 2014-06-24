class RutaController < ApplicationController
    include SessionsHelper
    before_filter :signed_in_user

	  before_action :set_periodo, only: [:index]

	def periodos
		@rutas = Lectura.group(:periodo).count.reverse_order(:periodo).paginate(page: params[:page])
	end

	def index
		@rutas = Lectura.select(:ruta).where(periodo: @periodo).group(:ruta).order(:ruta).paginate(page: params[:page])
	end

	def asignar
		@periodo = params[:periodo]
		@ruta = params[:ruta]

		lecturista = params[:lecturista]

		Lectura.where({periodo: @periodo, ruta: @ruta}).update_all(lecturista_id: lecturista)

		redirect_to :action => :index, params: params

	end

	def nuevo_periodo
		ruta = params[:ruta]
		periodo = Lectura.where("trim(ruta) = ?", ruta).maximum(:periodo)

		y = periodo.to_s[0,4].to_i
		m = periodo.to_s[5,6].to_i
		ndate = DateTime.new(y,m,1) + 1.month


		sig_perido = ndate.strftime("%Y%m").to_i

		Lectura.where("trim(ruta) = ? AND periodo=?", ruta, periodo).each do |l|
			nl = l.dup

			nl.periodo = sig_perido
			nl.lectura_valor = nil
			nl.lectura_consumo = nil
			nl.lectura_fh_toma = nil
			nl.lectura_fh_carga = nil
			nl.lectura_lat = nil
			nl.lectura_lon = nil
			nl.plan_id = nil
			nl.cambios = nil
			nl.incidencias = nil
			nl.estado = "Nueva"
			nl.save

		end


		redirect_to "/ruta/index?periodo=#{sig_perido}"
	end


	private

	def set_periodo
		@periodo = params[:periodo]
	end


end
