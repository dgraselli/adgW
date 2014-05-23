class UnidadesController < ApplicationController
  
  def index
  	@unidades = Unidad.paginate(page: params[:page])
  end

  def lecturas
  	@lectura_hsts = Unidad.find(params[:id]).medidor.lecturas_hst.paginate(page: params[:page]) 


  	respond_to do |format|
    	format.js { render :lecturas }
    	format.html { render :lecturas, layout: false}
  	end
  end

end
