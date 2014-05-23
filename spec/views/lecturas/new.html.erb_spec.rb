require 'spec_helper'

describe "lecturas/new" do
  before(:each) do
    assign(:lectura, stub_model(Lectura,
      :usuario => 1,
      :razon_social => "MyString",
      :doc_tipo => "MyString",
      :doc_nro => "MyString",
      :localidad => "MyString",
      :calle => "MyString",
      :altura => "MyString",
      :piso => "MyString",
      :dpto => "MyString",
      :datos_comp => "MyString",
      :cp => 1,
      :situacion => "MyString",
      :telefono => "MyString",
      :medidor_tipo => "MyString",
      :medidor_num => "MyString",
      :lectura_valor => 1,
      :lat => "",
      :lon => "",
      :incidencias => "MyString"
    ).as_new_record)
  end

  it "renders new lectura form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", lecturas_path, "post" do
      assert_select "input#lectura_usuario[name=?]", "lectura[usuario]"
      assert_select "input#lectura_razon_social[name=?]", "lectura[razon_social]"
      assert_select "input#lectura_doc_tipo[name=?]", "lectura[doc_tipo]"
      assert_select "input#lectura_doc_nro[name=?]", "lectura[doc_nro]"
      assert_select "input#lectura_localidad[name=?]", "lectura[localidad]"
      assert_select "input#lectura_calle[name=?]", "lectura[calle]"
      assert_select "input#lectura_altura[name=?]", "lectura[altura]"
      assert_select "input#lectura_piso[name=?]", "lectura[piso]"
      assert_select "input#lectura_dpto[name=?]", "lectura[dpto]"
      assert_select "input#lectura_datos_comp[name=?]", "lectura[datos_comp]"
      assert_select "input#lectura_cp[name=?]", "lectura[cp]"
      assert_select "input#lectura_situacion[name=?]", "lectura[situacion]"
      assert_select "input#lectura_telefono[name=?]", "lectura[telefono]"
      assert_select "input#lectura_medidor_tipo[name=?]", "lectura[medidor_tipo]"
      assert_select "input#lectura_medidor_num[name=?]", "lectura[medidor_num]"
      assert_select "input#lectura_lectura_valor[name=?]", "lectura[lectura_valor]"
      assert_select "input#lectura_lat[name=?]", "lectura[lat]"
      assert_select "input#lectura_lon[name=?]", "lectura[lon]"
      assert_select "input#lectura_incidencias[name=?]", "lectura[incidencias]"
    end
  end
end
