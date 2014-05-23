require "spec_helper"

describe LecturasController do
  describe "routing" do

    it "routes to #index" do
      get("/lecturas").should route_to("lecturas#index")
    end

    it "routes to #new" do
      get("/lecturas/new").should route_to("lecturas#new")
    end

    it "routes to #show" do
      get("/lecturas/1").should route_to("lecturas#show", :id => "1")
    end

    it "routes to #edit" do
      get("/lecturas/1/edit").should route_to("lecturas#edit", :id => "1")
    end

    it "routes to #create" do
      post("/lecturas").should route_to("lecturas#create")
    end

    it "routes to #update" do
      put("/lecturas/1").should route_to("lecturas#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/lecturas/1").should route_to("lecturas#destroy", :id => "1")
    end

  end
end
