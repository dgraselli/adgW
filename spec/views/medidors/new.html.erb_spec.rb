require 'spec_helper'

describe "medidors/new" do
  before(:each) do
    assign(:medidor, stub_model(Medidor,
      :idactivo => "",
      :codigo_interno => "MyString",
      :descripcion => "MyString",
      :tipo => "MyString",
      :estado => "MyString",
      :ub_descripcion => "MyString",
      :ub_calle => "MyString",
      :ub_altura => "MyString",
      :ub_entre => "MyString",
      :ub_y => "MyString",
      :ub_tipo => "MyString",
      :ub_idlocalidad => ""
    ).as_new_record)
  end

  it "renders new medidor form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", medidors_path, "post" do
      assert_select "input#medidor_idactivo[name=?]", "medidor[idactivo]"
      assert_select "input#medidor_codigo_interno[name=?]", "medidor[codigo_interno]"
      assert_select "input#medidor_descripcion[name=?]", "medidor[descripcion]"
      assert_select "input#medidor_tipo[name=?]", "medidor[tipo]"
      assert_select "input#medidor_estado[name=?]", "medidor[estado]"
      assert_select "input#medidor_ub_descripcion[name=?]", "medidor[ub_descripcion]"
      assert_select "input#medidor_ub_calle[name=?]", "medidor[ub_calle]"
      assert_select "input#medidor_ub_altura[name=?]", "medidor[ub_altura]"
      assert_select "input#medidor_ub_entre[name=?]", "medidor[ub_entre]"
      assert_select "input#medidor_ub_y[name=?]", "medidor[ub_y]"
      assert_select "input#medidor_ub_tipo[name=?]", "medidor[ub_tipo]"
      assert_select "input#medidor_ub_idlocalidad[name=?]", "medidor[ub_idlocalidad]"
    end
  end
end
