require 'spec_helper'

describe "incidencias/index" do
  before(:each) do
    assign(:incidencias, [
      stub_model(Incidencia,
        :nombre => "Nombre"
      ),
      stub_model(Incidencia,
        :nombre => "Nombre"
      )
    ])
  end

  it "renders a list of incidencias" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Nombre".to_s, :count => 2
  end
end
