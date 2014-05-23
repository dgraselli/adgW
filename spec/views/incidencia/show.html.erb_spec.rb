require 'spec_helper'

describe "incidencia/show" do
  before(:each) do
    @incidencium = assign(:incidencium, stub_model(Incidencium,
      :nombre => "Nombre"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Nombre/)
  end
end
