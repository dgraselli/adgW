require 'spec_helper'

describe "ruta/new" do
  before(:each) do
    assign(:rutum, stub_model(Rutum,
      :nombre => "MyString",
      :localidad => "MyString",
      :orden => 1
    ).as_new_record)
  end

  it "renders new rutum form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", ruta_path, "post" do
      assert_select "input#rutum_nombre[name=?]", "rutum[nombre]"
      assert_select "input#rutum_localidad[name=?]", "rutum[localidad]"
      assert_select "input#rutum_orden[name=?]", "rutum[orden]"
    end
  end
end
