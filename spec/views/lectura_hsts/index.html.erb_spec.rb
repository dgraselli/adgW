require 'spec_helper'

describe "lectura_hsts/index" do
  before(:each) do
    assign(:lectura_hsts, [
      stub_model(LecturaHst),
      stub_model(LecturaHst)
    ])
  end

  it "renders a list of lectura_hsts" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
  end
end
