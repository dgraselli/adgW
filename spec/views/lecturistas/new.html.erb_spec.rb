require 'spec_helper'

describe "lecturistas/new" do
  before(:each) do
    assign(:lecturista, stub_model(Lecturista,
      :nombre => "MyString"
    ).as_new_record)
  end

  it "renders new lecturista form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", lecturistas_path, "post" do
      assert_select "input#lecturista_nombre[name=?]", "lecturista[nombre]"
    end
  end
end
