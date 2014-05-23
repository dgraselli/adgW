require 'spec_helper'

describe MapaController do

  describe "GET 'mapa1'" do
    it "returns http success" do
      get 'mapa1'
      response.should be_success
    end
  end

end
