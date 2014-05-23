require 'spec_helper'

describe "lectura_hsts/new" do
  before(:each) do
    assign(:lectura_hst, stub_model(LecturaHst).as_new_record)
  end

  it "renders new lectura_hst form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", lectura_hsts_path, "post" do
    end
  end
end
