require 'spec_helper'

describe "incidencias/new" do
  before(:each) do
    assign(:incidencia, stub_model(Incidencia,
      :nombre => "MyString"
    ).as_new_record)
  end

  it "renders new incidencia form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", incidencias_path, "post" do
      assert_select "input#incidencia_nombre[name=?]", "incidencia[nombre]"
    end
  end
end
