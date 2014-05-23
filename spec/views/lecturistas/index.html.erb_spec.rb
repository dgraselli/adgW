require 'spec_helper'

describe "lecturistas/index" do
  before(:each) do
    assign(:lecturistas, [
      stub_model(Lecturista,
        :nombre => "Nombre"
      ),
      stub_model(Lecturista,
        :nombre => "Nombre"
      )
    ])
  end

  it "renders a list of lecturistas" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Nombre".to_s, :count => 2
  end
end
