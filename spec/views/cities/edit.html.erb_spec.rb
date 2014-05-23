require 'spec_helper'

describe "cities/edit" do
  before(:each) do
    @city = assign(:city, stub_model(City,
      :nombre => "MyString",
      :sufijo => "MyString"
    ))
  end

  it "renders the edit city form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", city_path(@city), "post" do
      assert_select "input#city_nombre[name=?]", "city[nombre]"
      assert_select "input#city_sufijo[name=?]", "city[sufijo]"
    end
  end
end
