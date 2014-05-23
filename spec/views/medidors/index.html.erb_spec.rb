require 'spec_helper'

describe "medidors/index" do
  before(:each) do
    assign(:medidors, [
      stub_model(Medidor,
        :idactivo => "",
        :codigo_interno => "Codigo Interno",
        :descripcion => "Descripcion",
        :tipo => "Tipo",
        :estado => "Estado",
        :ub_descripcion => "Ub Descripcion",
        :ub_calle => "Ub Calle",
        :ub_altura => "Ub Altura",
        :ub_entre => "Ub Entre",
        :ub_y => "Ub Y",
        :ub_tipo => "Ub Tipo",
        :ub_idlocalidad => ""
      ),
      stub_model(Medidor,
        :idactivo => "",
        :codigo_interno => "Codigo Interno",
        :descripcion => "Descripcion",
        :tipo => "Tipo",
        :estado => "Estado",
        :ub_descripcion => "Ub Descripcion",
        :ub_calle => "Ub Calle",
        :ub_altura => "Ub Altura",
        :ub_entre => "Ub Entre",
        :ub_y => "Ub Y",
        :ub_tipo => "Ub Tipo",
        :ub_idlocalidad => ""
      )
    ])
  end

  it "renders a list of medidors" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "".to_s, :count => 2
    assert_select "tr>td", :text => "Codigo Interno".to_s, :count => 2
    assert_select "tr>td", :text => "Descripcion".to_s, :count => 2
    assert_select "tr>td", :text => "Tipo".to_s, :count => 2
    assert_select "tr>td", :text => "Estado".to_s, :count => 2
    assert_select "tr>td", :text => "Ub Descripcion".to_s, :count => 2
    assert_select "tr>td", :text => "Ub Calle".to_s, :count => 2
    assert_select "tr>td", :text => "Ub Altura".to_s, :count => 2
    assert_select "tr>td", :text => "Ub Entre".to_s, :count => 2
    assert_select "tr>td", :text => "Ub Y".to_s, :count => 2
    assert_select "tr>td", :text => "Ub Tipo".to_s, :count => 2
    assert_select "tr>td", :text => "".to_s, :count => 2
  end
end
