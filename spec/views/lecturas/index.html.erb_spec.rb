require 'spec_helper'

describe "lecturas/index" do
  before(:each) do
    assign(:lecturas, [
      stub_model(Lectura,
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
      ),
      stub_model(Lectura,
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
      )
    ])
  end

  it "renders a list of lecturas" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "Razon Social".to_s, :count => 2
    assert_select "tr>td", :text => "Doc Tipo".to_s, :count => 2
    assert_select "tr>td", :text => "Doc Nro".to_s, :count => 2
    assert_select "tr>td", :text => "Localidad".to_s, :count => 2
    assert_select "tr>td", :text => "Calle".to_s, :count => 2
    assert_select "tr>td", :text => "Altura".to_s, :count => 2
    assert_select "tr>td", :text => "Piso".to_s, :count => 2
    assert_select "tr>td", :text => "Dpto".to_s, :count => 2
    assert_select "tr>td", :text => "Datos Comp".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => "Situacion".to_s, :count => 2
    assert_select "tr>td", :text => "Telefono".to_s, :count => 2
    assert_select "tr>td", :text => "Medidor Tipo".to_s, :count => 2
    assert_select "tr>td", :text => "Medidor Num".to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
    assert_select "tr>td", :text => "".to_s, :count => 2
    assert_select "tr>td", :text => "".to_s, :count => 2
    assert_select "tr>td", :text => "Incidencias".to_s, :count => 2
  end
end
