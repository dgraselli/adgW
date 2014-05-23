class IncidenciasController < ApplicationController
  before_action :set_incidencia, only: [:show, :edit, :update, :destroy]

  # GET /incidencias
  # GET /incidencias.json
  def index
    @incidencias = Incidencia.all
  end

  # GET /incidencias/1
  # GET /incidencias/1.json
  def show
  end

  # GET /incidencias/new
  def new
    @incidencia = Incidencia.new
  end

  # GET /incidencias/1/edit
  def edit
  end

  # POST /incidencias
  # POST /incidencias.json
  def create
    @incidencia = Incidencia.new(incidencia_params)

    respond_to do |format|
      if @incidencia.save
        format.html { redirect_to @incidencia, notice: 'Incidencia was successfully created.' }
        format.json { render action: 'show', status: :created, location: @incidencia }
      else
        format.html { render action: 'new' }
        format.json { render json: @incidencia.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /incidencias/1
  # PATCH/PUT /incidencias/1.json
  def update
    respond_to do |format|
      if @incidencia.update(incidencia_params)
        format.html { redirect_to @incidencia, notice: 'Incidencia was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @incidencia.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /incidencias/1
  # DELETE /incidencias/1.json
  def destroy
    @incidencia.destroy
    respond_to do |format|
      format.html { redirect_to incidencias_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_incidencia
      @incidencia = Incidencia.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def incidencia_params
      params.require(:incidencia).permit(:nombre)
    end
end
