require "spec_helper"

describe LecturaHstsController do
  describe "routing" do

    it "routes to #index" do
      get("/lectura_hsts").should route_to("lectura_hsts#index")
    end

    it "routes to #new" do
      get("/lectura_hsts/new").should route_to("lectura_hsts#new")
    end

    it "routes to #show" do
      get("/lectura_hsts/1").should route_to("lectura_hsts#show", :id => "1")
    end

    it "routes to #edit" do
      get("/lectura_hsts/1/edit").should route_to("lectura_hsts#edit", :id => "1")
    end

    it "routes to #create" do
      post("/lectura_hsts").should route_to("lectura_hsts#create")
    end

    it "routes to #update" do
      put("/lectura_hsts/1").should route_to("lectura_hsts#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/lectura_hsts/1").should route_to("lectura_hsts#destroy", :id => "1")
    end

  end
end
