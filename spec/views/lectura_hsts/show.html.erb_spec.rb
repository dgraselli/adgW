require 'spec_helper'

describe "lectura_hsts/show" do
  before(:each) do
    @lectura_hst = assign(:lectura_hst, stub_model(LecturaHst))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
  end
end
