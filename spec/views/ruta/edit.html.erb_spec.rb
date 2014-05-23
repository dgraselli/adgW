require 'spec_helper'

describe "ruta/edit" do
  before(:each) do
    @rutum = assign(:rutum, stub_model(Rutum,
      :nombre => "MyString",
      :localidad => "MyString",
      :orden => 1
    ))
  end

  it "renders the edit rutum form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", rutum_path(@rutum), "post" do
      assert_select "input#rutum_nombre[name=?]", "rutum[nombre]"
      assert_select "input#rutum_localidad[name=?]", "rutum[localidad]"
      assert_select "input#rutum_orden[name=?]", "rutum[orden]"
    end
  end
end
