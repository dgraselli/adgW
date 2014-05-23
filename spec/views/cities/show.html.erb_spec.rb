require 'spec_helper'

describe "cities/show" do
  before(:each) do
    @city = assign(:city, stub_model(City,
      :nombre => "Nombre",
      :sufijo => "Sufijo"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Nombre/)
    rendered.should match(/Sufijo/)
  end
end
