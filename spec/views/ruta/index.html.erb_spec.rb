require 'spec_helper'

describe "ruta/index" do
  before(:each) do
    assign(:ruta, [
      stub_model(Rutum,
        :nombre => "Nombre",
        :localidad => "Localidad",
        :orden => 1
      ),
      stub_model(Rutum,
        :nombre => "Nombre",
        :localidad => "Localidad",
        :orden => 1
      )
    ])
  end

  it "renders a list of ruta" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Nombre".to_s, :count => 2
    assert_select "tr>td", :text => "Localidad".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
  end
end
