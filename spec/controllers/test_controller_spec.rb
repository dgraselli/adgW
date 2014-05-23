require 'spec_helper'

describe TestController do

  describe "GET 'controles'" do
    it "returns http success" do
      get 'controles'
      response.should be_success
    end
  end

end
