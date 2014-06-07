class LecturasController < ApplicationController
  helper_method :sort_column, :sort_direction
  include SessionsHelper
  before_filter :signed_in_user

  before_action :set_lectura, only: [:show, :edit, :update, :destroy, :georeferenciar, :visualizar, :fotos, :mini]
  after_filter :customheaders
  protect_from_forgery :except => [:visualizar, :mini]

  # GET /lecturas
  # GET /lecturas.json
  def index
    @lecturas = Lectura.search(params).order(sort_column + " " + sort_direction)

    respond_to do |format|
      format.html do
        @lecturas = @lecturas.paginate(page: params[:page],  :per_page => 300)
        @estado_cantidad = {:Todos => @lecturas.count}.merge @lecturas.group(:estado).count
        render :index
      end
      format.csv do
        columns = @lecturas.column_names
        csv = CSV.generate() do |csv|
          csv << columns
          @lecturas.each do |a|
            csv << a.attributes.values_at(*columns)
          end
        end

        send_data csv, :filename => controller_name + ".csv"
      end
      format.xls do
        columns = @lecturas.column_names
        csv = CSV.generate(col_sep: "\t") do |csv|
          csv << columns
          @lecturas.each do |a|
            csv << a.attributes.values_at(*columns)
          end
        end

        send_data csv, :filename => controller_name + ".xls"
      end
    end

  end


  # GET /lecturas/1
  # GET /lecturas/1.json
  def show
  end

  # GET /lecturas/new
  def new
    @lectura = Lectura.new
  end

  # GET /lecturas/1/edit
  def edit
  end

  # POST /lecturas
  # POST /lecturas.json
  def create
    @lectura = Lectura.new(lectura_params)

    respond_to do |format|
      if @lectura.save
        format.html { redirect_to @lectura, notice: 'Lectura was successfully created.' }
        format.json { render action: 'show', status: :created, location: @lectura }
      else
        format.html { render action: 'new' }
        format.json { render json: @lectura.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /lecturas/1
  # PATCH/PUT /lecturas/1.json
  def update
    respond_to do |format|
      if @lectura.update(lectura_params)
        format.html { redirect_to @lectura, notice: 'Lectura was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @lectura.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lecturas/1
  # DELETE /lecturas/1.json
  def destroy
    @lectura.destroy
    respond_to do |format|
      format.html { redirect_to lecturas_url }
      format.json { head :no_content }
    end
  end

  def pendientes

    @lecturas = Lectura.where(lectura_valor: nil)

    if(params[:lecturista].present?)
      @lecturas = @lecturas.where(lecturista_id: Lecturista.find_by_nombre(params[:lecturista].downcase) )
    end

    if(params[:ruta].present?)
      @lecturas = @lecturas.where(ruta: params[:ruta])
    end
    if(params[:periodo].present?)
      @lecturas = @lecturas.where(periodo: params[:periodo])
    end

    @lecturas = @lecturas.order(:secuencia);

    render :json => @lecturas.to_json(:methods => [:usuario, :razon_social, :direccion, :rango_valido, :deuda])
    #render :json => @lecturas.to_json(only:[:id, :usuario, :direccion], :methods => [:usuario, :razon_social, :direccion, :rango_valido])

  end

  def update_lectura

    @lectura = Lectura.find(params[:id])
    @lectura.lectura_fh_carga = DateTime.now
    @lectura.lectura_fh_toma = params[:fh]
    @lectura.lectura_valor = params[:valor]
    @lectura.lectura_lon = params[:lng]
    @lectura.lectura_lat = params[:lat]
    @lectura.lectura_accuracy = params[:accuracy]
    @lectura.lectura_pos = params[:pos].to_s
    @lectura.estado = 'Leida'

    @lectura.incidencias = params[:incidencias].to_s
    @lectura.cambios = params[:cambios].to_s
    @lectura.plan_id = params[:id_plan]

    @lectura.save

    email = @lectura.email

    if(params[:cambios].present?)
      cambios = params[:cambios].map{|a| a[1]}
      dato_mail = cambios.select{|x| x["dato"].downcase == "email" if x["dato"].present?}[0]
      email = dato_mail["valor"] if dato_mail.present?
    end

    if(params[:id_plan].present? and email.present?)
      UserMailer.send_factura(@lectura, params[:id_plan], email).deliver
    end

    render :json => {result: 'ok'}

  end

  def update_foto

    @lectura = Lectura.find(params[:id])
    fh = params[:fh]
    lon = params[:lng]
    lat = params[:lat]

    if(params[:file])
      @foto = Foto.new do |t|
        t.lectura_id = @lectura.id
        t.usuario_id = @lectura.usuario
        t.foto = params[:file].read
        t.filename = params[:file].original_filename
        t.name = params[:file].original_filename
        t.obs = "test"
        t.mime_type = params[:file].content_type
      end
      @foto.save
    end

    render :json => {result: 'ok'}
  end

  def add_foto
    @lectura = Lectura.find(params[:id])
    if params[:file].nil? 
      redirect_to @lectura, notice: 'Debe selecionar un archivo.'
    else

    @foto = Foto.new do |t|
      t.lectura_id = @lectura.id
      t.usuario_id = @lectura.usuario
      t.foto = params[:file].read
      t.filename = params[:file].original_filename
      t.name = params[:file].original_filename
      t.obs = "test"
      t.mime_type = params[:file].content_type
    end

    @foto.save

    redirect_to @lectura
  end
  end

  def delete_foto
    foto = Foto.find(params[:id])
    lectura = foto.lectura
    foto.delete

    redirect_to lectura
  end


  def visualizar
    render layout: false
  end

  def mini
    render layout: false
  end

  def fotos
    render layout: false
  end

  def georeferenciar
    @lectura.geocode
    @lectura.save

    redirect_to @lectura

  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_lectura
    @lectura = Lectura.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def lectura_params
    params.require(:lectura).permit(:usuario, :razon_social, :doc_tipo, :doc_nro, :localidad, :calle, :altura, :piso, :dpto, :datos_comp, :cp, :situacion, :telefono, :medidor_tipo, :medidor_num, :medidor_f_alta, :lectura_valor, :lectura_fh_toma, :lectura_fh_carga, :lat, :lon, :incidencias, :ruta, :periodo, :lecturista)
  end

  def customheaders
    response.headers["Access-Control-Allow-Origin"]="*"
    response.headers["Access-Control-Allow-Methods"]= "PUT, GET, POST, DELETE, OPTIONS"
    #response.headers["Access-Control-Allow-Headers"]= "*"
  end


  def sort_column
    Lectura.column_names.include?(params[:sort]) ? params[:sort] : "usuario"
  end

  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
  end
end
