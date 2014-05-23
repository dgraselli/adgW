require 'spec_helper'

describe "incidencias/show" do
  before(:each) do
    @incidencia = assign(:incidencia, stub_model(Incidencia,
      :nombre => "Nombre"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Nombre/)
  end
end
