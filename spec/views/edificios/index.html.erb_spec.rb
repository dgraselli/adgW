require 'spec_helper'

describe "edificios/index" do
  before(:each) do
    assign(:edificios, [
      stub_model(Edificio,
        :calle => "Calle",
        :altura => 1,
        :cant_uh => 2,
        :lat => 1.5,
        :lon => 1.5
      ),
      stub_model(Edificio,
        :calle => "Calle",
        :altura => 1,
        :cant_uh => 2,
        :lat => 1.5,
        :lon => 1.5
      )
    ])
  end

  it "renders a list of edificios" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Calle".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => 1.5.to_s, :count => 2
    assert_select "tr>td", :text => 1.5.to_s, :count => 2
  end
end
