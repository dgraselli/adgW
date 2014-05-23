require 'spec_helper'

describe "lecturistas/edit" do
  before(:each) do
    @lecturista = assign(:lecturista, stub_model(Lecturista,
      :nombre => "MyString"
    ))
  end

  it "renders the edit lecturista form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", lecturista_path(@lecturista), "post" do
      assert_select "input#lecturista_nombre[name=?]", "lecturista[nombre]"
    end
  end
end
