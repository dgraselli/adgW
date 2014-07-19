class MainController < ApplicationController 
  include SessionsHelper
  before_filter :signed_in_user, :except => [:qcode, :download_mobile]
  protect_from_forgery :except => [:guardar_direccion]
  after_filter :customheaders

  def home

  end
  def help
  end

  def about
  end

  def contact
  end

  def test_mail
    current_user.send_mail
    redirect_to :root
  end

  def download_mobile
    send_file "#{Rails.root}/public/uploads/adgM.apk"
  end

  def upload
    if request.post?
        uploaded_io = params[:attachment]
        f = File.new(Rails.root.join('public', 'uploads', "adgM.apk"), "w+b")
        f.write uploaded_io.read
        f.close
    end
  end

  def qcode
    url = url_for(controller: "main", action: "download_mobile", only_path: false)
    render :qrcode => url, :unit => 10, :level => :l, :format => 'svg'
  end

  def barcode(n)
    render :qrcode => url, :unit => 10, :level => :l, :format => 'svg'
  end

  def load_suggestions
    @suggestions = Ruta.select(:nombre)
    render json: @suggestions
  end

  def columns
    render :text => ActiveRecord::Base.connection.columns(params[:table]).map{|c| c.name }
  end

  def import
  end

  def do_clear_all
    Lectura.delete_all
    redirect_to :action => :home, :notice => "Se eliminaron todas las lecturas"
  end

  def do_import
    rowarray = Array.new
    myfile = params[:file]

    if myfile.nil?
      redirect_to '/main/import', notice: "Debe seleccionar un archivo"
      return
    end

    lines = CSV.read(myfile.path, col_sep: "\t")
    @columns = lines[0].compact.reject(&:blank?) << "estado"

    #check column_names
    invalid_cols = @columns.select{|a|  ! Lectura.column_names.include? a}
    if( ! invalid_cols.empty?)
      redirect_to '/main/import', notice: "Columnas invalidas:" + invalid_cols.join(",")
      return
    end

    @values = lines[1..lines.count-1].map{|line| line << "Nueva"} 

    if @columns.count != @values[0].count
      redirect_to '/main/import', notice: "La cantidad de columnas no coincide #{@columns.count} - #{@values[0].count}"
      return
    end

    Lectura.import( @columns, @values) #, validate: false
    Lectura.where("lectura_valor is not null").update_all(:estado => "Leida");
    redirect_to :action => :import
  end

  def import_simple
    rowarray = Array.new
    myfile = params[:file]
    @result = []

    lines = CSV.read(myfile.path, col_sep: "\t")
    header = lines[0].compact.reject(&:blank?)
    lines[1..lines.count].each do |line|
      hash = {}
      (0..header.count-1).each { |i| hash.merge! header[i] => line[i]  }
      @result << hash
      #render :text => hash
      Lectura.create!(hash)
    end

    Lectura.where("lectura_valor is not null").update_all(:estado => "Leida");
    redirect_to action: :index
  end

  def foto
    @image = Foto.find(params[:id])
    send_data @image.foto, :type => 'image/png', :disposition => 'inline'
  end

  def test_update_lectura

  end

  def direccion
    calle = params[:calle]
    altura = params[:altura]

    
    @unidades = Unidad.where("trim(calle)=? AND numero=?", calle, altura)    

    
  end

  def direcciones
    min_uh = params[:uh] || 40
    @direcciones = Direccion.where('cant_unidades >= ?', min_uh)
    @medidos_ph = Unidad.medidos_ph#.limit(3)
    #@relevados = Direccion.where('cant_unidades_relevadas is not null')
    @edificios = Edificio.all


    #@medidos = Unidad.where('mn = ? and lat is not null','Z')

  end

  def buscar_direccion
    if params[:lat].nil?
      calle = params[:calle]
      if params[:altura].to_i % 100 == 0
        n1 = params[:altura].to_i
        n2 = params[:altura].to_i + 50
      else
        n1 = n2 = params[:altura]
      end
      @direcciones = Direccion.where('calle like ? and numero between ? and ?', calle, n1, n2)    
    else
      radio = params[:radio] || 0.1

      @direcciones = Direccion.near([params[:lat], params[:lon]], radio, :units => :km)

    end

    @direcciones = @direcciones.order(:calle, :numero)
  end


  def guardar_direccion
    if params[:calle].nil? or params[:altura].nil? or params[:cant_unidades_relevadas].nil?
      render :json => {result: 'error', msg: 'Datos incompletos'}
      return 
    end

    direcciones = Direccion.where(calle: params[:calle], numero: params[:altura])    

    if direcciones.count > 0
      d = direcciones.first
    else
      d = Direccion.new
      d.calle = params[:calle]
      d.numero = params[:numero]
    end    

    d.cant_unidades_relevadas = params[:cant_unidades_relevadas]
    d.rel_lat = params[:rel_lat]
    d.rel_lon = params[:rel_lon]

    d.save

    render :json => {result: 'ok'}
  end


  private
    def customheaders
      response.headers["Access-Control-Allow-Origin"]="*"
      response.headers["Access-Control-Allow-Methods"]= "PUT, GET, POST, DELETE, OPTIONS"
      #response.headers["Access-Control-Allow-Headers"]= "*"
    end

end
