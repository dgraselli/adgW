require "spec_helper"

describe EdificiosController do
  describe "routing" do

    it "routes to #index" do
      get("/edificios").should route_to("edificios#index")
    end

    it "routes to #new" do
      get("/edificios/new").should route_to("edificios#new")
    end

    it "routes to #show" do
      get("/edificios/1").should route_to("edificios#show", :id => "1")
    end

    it "routes to #edit" do
      get("/edificios/1/edit").should route_to("edificios#edit", :id => "1")
    end

    it "routes to #create" do
      post("/edificios").should route_to("edificios#create")
    end

    it "routes to #update" do
      put("/edificios/1").should route_to("edificios#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/edificios/1").should route_to("edificios#destroy", :id => "1")
    end

  end
end
