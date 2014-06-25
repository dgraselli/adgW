class MainController < ApplicationController 
  include SessionsHelper
  before_filter :signed_in_user, :except => [:qcode, :download_mobile]

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

end
