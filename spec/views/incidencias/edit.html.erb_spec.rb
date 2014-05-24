require 'spec_helper'

describe "incidencias/edit" do
  before(:each) do
    @incidencia = assign(:incidencia, stub_model(Incidencia,
      :nombre => "MyString",
      :requiere_lectura => "",
      :dato_requerido => "MyString",
      :dato_rexp => "MyString",
      :incidencias_incompatibles => "MyString",
      :tipo => "MyString"
    ))
  end

  it "renders the edit incidencia form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", incidencia_path(@incidencia), "post" do
      assert_select "input#incidencia_nombre[name=?]", "incidencia[nombre]"
      assert_select "input#incidencia_requiere_lectura[name=?]", "incidencia[requiere_lectura]"
      assert_select "input#incidencia_dato_requerido[name=?]", "incidencia[dato_requerido]"
      assert_select "input#incidencia_dato_rexp[name=?]", "incidencia[dato_rexp]"
      assert_select "input#incidencia_incidencias_incompatibles[name=?]", "incidencia[incidencias_incompatibles]"
      assert_select "input#incidencia_tipo[name=?]", "incidencia[tipo]"
    end
  end
end
