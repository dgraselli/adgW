class MainController < ApplicationController 
  include SessionsHelper


  def home
    @rutas = Rutum.paginate(page: params[:page], per_page: 5)
  end
  def help
  end

  def about
  end

  def contact
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

  def load_suggestions
    @suggestions = Ruta.select(:nombre)
    render json: @suggestions
  end

  def lecturas
    @lecturas = LecturaHst.select("*").joins(:medidor => :unidad)
    #@lecturas = Medidor.select("*").joins( :unidad).limit(100)

    columns = @lecturas.column_names + Medidor.column_names + Unidad.column_names
    csv = CSV.generate() do |csv|
      csv << columns
      @lecturas.each do |a|
        csv << a.attributes.values_at(*columns)
      end
    end

    respond_to do |format|
      format.html
      format.csv { send_data csv }
      format.xls { send_data @lecturas.to_a.to_csv(col_sep: "\t") }
    end

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

    lines = CSV.read(myfile.path, col_sep: "\t")
    @columns = lines[0].compact.reject(&:blank?)

    #check column_names
    invalid_cols = @columns.select{|a|  ! Lectura.column_names.include? a}
    if( ! invalid_cols.empty?)
      fail "Columnas invalidas:" + invalid_cols.join(",")
    end

    @values = lines[1..lines.count-1]


    Lectura.import( @columns, @values) #, validate: false
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
    redirect_to action: :index
  end


end
