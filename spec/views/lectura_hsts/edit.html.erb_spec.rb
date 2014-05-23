require 'spec_helper'

describe "lectura_hsts/edit" do
  before(:each) do
    @lectura_hst = assign(:lectura_hst, stub_model(LecturaHst))
  end

  it "renders the edit lectura_hst form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", lectura_hst_path(@lectura_hst), "post" do
    end
  end
end
