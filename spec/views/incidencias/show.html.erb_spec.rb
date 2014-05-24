require 'spec_helper'

describe "incidencias/show" do
  before(:each) do
    @incidencia = assign(:incidencia, stub_model(Incidencia,
      :nombre => "Nombre",
      :requiere_lectura => "",
      :dato_requerido => "Dato Requerido",
      :dato_rexp => "Dato Rexp",
      :incidencias_incompatibles => "Incidencias Incompatibles",
      :tipo => "Tipo"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Nombre/)
    rendered.should match(//)
    rendered.should match(/Dato Requerido/)
    rendered.should match(/Dato Rexp/)
    rendered.should match(/Incidencias Incompatibles/)
    rendered.should match(/Tipo/)
  end
end
