require 'spec_helper'

describe "cities/index" do
  before(:each) do
    assign(:cities, [
      stub_model(City,
        :nombre => "Nombre",
        :sufijo => "Sufijo"
      ),
      stub_model(City,
        :nombre => "Nombre",
        :sufijo => "Sufijo"
      )
    ])
  end

  it "renders a list of cities" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Nombre".to_s, :count => 2
    assert_select "tr>td", :text => "Sufijo".to_s, :count => 2
  end
end
