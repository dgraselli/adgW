require 'spec_helper'

describe "lecturas/show" do
  before(:each) do
    @lectura = assign(:lectura, stub_model(Lectura,
      :usuario => 1,
      :razon_social => "Razon Social",
      :doc_tipo => "Doc Tipo",
      :doc_nro => "Doc Nro",
      :localidad => "Localidad",
      :calle => "Calle",
      :altura => "Altura",
      :piso => "Piso",
      :dpto => "Dpto",
      :datos_comp => "Datos Comp",
      :cp => 2,
      :situacion => "Situacion",
      :telefono => "Telefono",
      :medidor_tipo => "Medidor Tipo",
      :medidor_num => "Medidor Num",
      :lectura_valor => 3,
      :lat => "",
      :lon => "",
      :incidencias => "Incidencias"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1/)
    rendered.should match(/Razon Social/)
    rendered.should match(/Doc Tipo/)
    rendered.should match(/Doc Nro/)
    rendered.should match(/Localidad/)
    rendered.should match(/Calle/)
    rendered.should match(/Altura/)
    rendered.should match(/Piso/)
    rendered.should match(/Dpto/)
    rendered.should match(/Datos Comp/)
    rendered.should match(/2/)
    rendered.should match(/Situacion/)
    rendered.should match(/Telefono/)
    rendered.should match(/Medidor Tipo/)
    rendered.should match(/Medidor Num/)
    rendered.should match(/3/)
    rendered.should match(//)
    rendered.should match(//)
    rendered.should match(/Incidencias/)
  end
end
