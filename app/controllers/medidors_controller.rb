class MedidorsController < ApplicationController
  before_action :set_medidor, only: [:show, :edit, :update, :destroy]

  # GET /medidors
  def index
      if params[:rutum_id]
        @rutum = Rutum.find(params[:rutum_id])
        @medidors = @rutum.medidores.order(:ub_calle, :ub_altura).paginate(page: params[:page])
      else
        @medidors = Medidor.order(:ub_calle, :ub_altura).paginate(page: params[:page])
      end
  end



  # GET /medidors/1
  def show
  end

  # GET /medidors/new
  def new
    @medidor = Medidor.new
  end

  # GET /medidors/1/edit
  def edit
  end

  # POST /medidors
  def create
    @medidor = Medidor.new(medidor_params)

    if @medidor.save
      redirect_to @medidor, notice: 'Medidor was successfully created.'
    else
      render action: 'new'
    end
  end

  # PATCH/PUT /medidors/1
  def update
    if @medidor.update(medidor_params)
      redirect_to @medidor, notice: 'Medidor was successfully updated.'
    else
      render action: 'edit'
    end
  end

  # DELETE /medidors/1
  def destroy
    @medidor.destroy
    redirect_to medidors_url, notice: 'Medidor was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_medidor
      @medidor = Medidor.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def medidor_params
      params.require(:medidor).permit(:idactivo, :codigo_interno, :descripcion, :tipo, :estado, :ub_descripcion, :ub_calle, :ub_altura, :ub_entre, :ub_y, :ub_tipo, :ub_idlocalidad, :city_id)
    end
end
