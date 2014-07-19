require 'spec_helper'

describe "edificios/edit" do
  before(:each) do
    @edificio = assign(:edificio, stub_model(Edificio,
      :calle => "MyString",
      :altura => 1,
      :cant_uh => 1,
      :lat => 1.5,
      :lon => 1.5
    ))
  end

  it "renders the edit edificio form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", edificio_path(@edificio), "post" do
      assert_select "input#edificio_calle[name=?]", "edificio[calle]"
      assert_select "input#edificio_altura[name=?]", "edificio[altura]"
      assert_select "input#edificio_cant_uh[name=?]", "edificio[cant_uh]"
      assert_select "input#edificio_lat[name=?]", "edificio[lat]"
      assert_select "input#edificio_lon[name=?]", "edificio[lon]"
    end
  end
end
