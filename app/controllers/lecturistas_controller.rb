class LecturistasController < ApplicationController
  include SessionsHelper
  before_filter :signed_in_user

  before_action :set_lecturista, only: [:show, :edit, :update, :destroy]

  # GET /lecturistas
  # GET /lecturistas.json
  def index
    @lecturistas = Lecturista.all
  end

  # GET /lecturistas/1
  # GET /lecturistas/1.json
  def show
  end

  # GET /lecturistas/new
  def new
    @lecturista = Lecturista.new
  end

  # GET /lecturistas/1/edit
  def edit
  end

  # POST /lecturistas
  # POST /lecturistas.json
  def create
    @lecturista = Lecturista.new(lecturista_params)

    respond_to do |format|
      if @lecturista.save
        format.html { redirect_to @lecturista, notice: 'Lecturista was successfully created.' }
        format.json { render action: 'show', status: :created, location: @lecturista }
      else
        format.html { render action: 'new' }
        format.json { render json: @lecturista.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /lecturistas/1
  # PATCH/PUT /lecturistas/1.json
  def update
    respond_to do |format|
      if @lecturista.update(lecturista_params)
        format.html { redirect_to @lecturista, notice: 'Lecturista was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @lecturista.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lecturistas/1
  # DELETE /lecturistas/1.json
  def destroy
    @lecturista.destroy
    respond_to do |format|
      format.html { redirect_to lecturistas_url }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_lecturista
    @lecturista = Lecturista.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def lecturista_params
    params.require(:lecturista).permit(:nombre)
  end
  

end
