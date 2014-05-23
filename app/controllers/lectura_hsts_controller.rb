class LecturaHstsController < ApplicationController
  before_action :set_lectura_hst, only: [:show, :edit, :update, :destroy]

  # GET /lectura_hsts
  def index
    @lectura_hsts = LecturaHst.paginate(page: params[:page])
  end

  # GET /lectura_hsts/1
  def show
  end

  # GET /lectura_hsts/new
  def new
    @lectura_hst = LecturaHst.new
  end

  # GET /lectura_hsts/1/edit
  def edit
  end

  # POST /lectura_hsts
  def create
    @lectura_hst = LecturaHst.new(lectura_hst_params)

    if @lectura_hst.save
      redirect_to @lectura_hst, notice: 'Lectura hst was successfully created.'
    else
      render action: 'new'
    end
  end

  # PATCH/PUT /lectura_hsts/1
  def update
    if @lectura_hst.update(lectura_hst_params)
      redirect_to @lectura_hst, notice: 'Lectura hst was successfully updated.'
    else
      render action: 'edit'
    end
  end

  # DELETE /lectura_hsts/1
  def destroy
    @lectura_hst.destroy
    redirect_to lectura_hsts_url, notice: 'Lectura hst was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lectura_hst
      @lectura_hst = LecturaHst.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def lectura_hst_params
      params[:lectura_hst]
    end
end
