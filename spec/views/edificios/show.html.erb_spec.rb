require 'spec_helper'

describe "edificios/show" do
  before(:each) do
    @edificio = assign(:edificio, stub_model(Edificio,
      :calle => "Calle",
      :altura => 1,
      :cant_uh => 2,
      :lat => 1.5,
      :lon => 1.5
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Calle/)
    rendered.should match(/1/)
    rendered.should match(/2/)
    rendered.should match(/1.5/)
    rendered.should match(/1.5/)
  end
end
