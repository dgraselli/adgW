require 'spec_helper'

describe "incidencia/new" do
  before(:each) do
    assign(:incidencium, stub_model(Incidencium,
      :nombre => "MyString"
    ).as_new_record)
  end

  it "renders new incidencium form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", incidencia_path, "post" do
      assert_select "input#incidencium_nombre[name=?]", "incidencium[nombre]"
    end
  end
end
