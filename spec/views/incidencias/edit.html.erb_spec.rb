require 'spec_helper'

describe "incidencias/edit" do
  before(:each) do
    @incidencia = assign(:incidencia, stub_model(Incidencia,
      :nombre => "MyString"
    ))
  end

  it "renders the edit incidencia form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", incidencia_path(@incidencia), "post" do
      assert_select "input#incidencia_nombre[name=?]", "incidencia[nombre]"
    end
  end
end
