require 'spec_helper'

describe "incidencia/edit" do
  before(:each) do
    @incidencium = assign(:incidencium, stub_model(Incidencium,
      :nombre => "MyString"
    ))
  end

  it "renders the edit incidencium form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", incidencium_path(@incidencium), "post" do
      assert_select "input#incidencium_nombre[name=?]", "incidencium[nombre]"
    end
  end
end
