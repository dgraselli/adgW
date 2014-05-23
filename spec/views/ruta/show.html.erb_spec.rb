require 'spec_helper'

describe "ruta/show" do
  before(:each) do
    @rutum = assign(:rutum, stub_model(Rutum,
      :nombre => "Nombre",
      :localidad => "Localidad",
      :orden => 1
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Nombre/)
    rendered.should match(/Localidad/)
    rendered.should match(/1/)
  end
end
