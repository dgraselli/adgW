require 'spec_helper'

describe "incidencia/index" do
  before(:each) do
    assign(:incidencia, [
      stub_model(Incidencium,
        :nombre => "Nombre"
      ),
      stub_model(Incidencium,
        :nombre => "Nombre"
      )
    ])
  end

  it "renders a list of incidencia" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Nombre".to_s, :count => 2
  end
end
