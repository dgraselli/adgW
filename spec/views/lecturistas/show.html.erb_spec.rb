require 'spec_helper'

describe "lecturistas/show" do
  before(:each) do
    @lecturista = assign(:lecturista, stub_model(Lecturista,
      :nombre => "Nombre"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Nombre/)
  end
end
