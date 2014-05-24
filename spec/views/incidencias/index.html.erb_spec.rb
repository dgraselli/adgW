require 'spec_helper'

describe "incidencias/index" do
  before(:each) do
    assign(:incidencias, [
      stub_model(Incidencia,
        :nombre => "Nombre",
        :requiere_lectura => "",
        :dato_requerido => "Dato Requerido",
        :dato_rexp => "Dato Rexp",
        :incidencias_incompatibles => "Incidencias Incompatibles",
        :tipo => "Tipo"
      ),
      stub_model(Incidencia,
        :nombre => "Nombre",
        :requiere_lectura => "",
        :dato_requerido => "Dato Requerido",
        :dato_rexp => "Dato Rexp",
        :incidencias_incompatibles => "Incidencias Incompatibles",
        :tipo => "Tipo"
      )
    ])
  end

  it "renders a list of incidencias" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Nombre".to_s, :count => 2
    assert_select "tr>td", :text => "".to_s, :count => 2
    assert_select "tr>td", :text => "Dato Requerido".to_s, :count => 2
    assert_select "tr>td", :text => "Dato Rexp".to_s, :count => 2
    assert_select "tr>td", :text => "Incidencias Incompatibles".to_s, :count => 2
    assert_select "tr>td", :text => "Tipo".to_s, :count => 2
  end
end
