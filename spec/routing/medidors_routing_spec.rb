require "spec_helper"

describe MedidorsController do
  describe "routing" do

    it "routes to #index" do
      get("/medidors").should route_to("medidors#index")
    end

    it "routes to #new" do
      get("/medidors/new").should route_to("medidors#new")
    end

    it "routes to #show" do
      get("/medidors/1").should route_to("medidors#show", :id => "1")
    end

    it "routes to #edit" do
      get("/medidors/1/edit").should route_to("medidors#edit", :id => "1")
    end

    it "routes to #create" do
      post("/medidors").should route_to("medidors#create")
    end

    it "routes to #update" do
      put("/medidors/1").should route_to("medidors#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/medidors/1").should route_to("medidors#destroy", :id => "1")
    end

  end
end
