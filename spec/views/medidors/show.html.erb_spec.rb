require 'spec_helper'

describe "medidors/show" do
  before(:each) do
    @medidor = assign(:medidor, stub_model(Medidor,
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
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(//)
    rendered.should match(/Codigo Interno/)
    rendered.should match(/Descripcion/)
    rendered.should match(/Tipo/)
    rendered.should match(/Estado/)
    rendered.should match(/Ub Descripcion/)
    rendered.should match(/Ub Calle/)
    rendered.should match(/Ub Altura/)
    rendered.should match(/Ub Entre/)
    rendered.should match(/Ub Y/)
    rendered.should match(/Ub Tipo/)
    rendered.should match(//)
  end
end
