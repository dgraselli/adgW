require "spec_helper"

describe LecturistasController do
  describe "routing" do

    it "routes to #index" do
      get("/lecturistas").should route_to("lecturistas#index")
    end

    it "routes to #new" do
      get("/lecturistas/new").should route_to("lecturistas#new")
    end

    it "routes to #show" do
      get("/lecturistas/1").should route_to("lecturistas#show", :id => "1")
    end

    it "routes to #edit" do
      get("/lecturistas/1/edit").should route_to("lecturistas#edit", :id => "1")
    end

    it "routes to #create" do
      post("/lecturistas").should route_to("lecturistas#create")
    end

    it "routes to #update" do
      put("/lecturistas/1").should route_to("lecturistas#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/lecturistas/1").should route_to("lecturistas#destroy", :id => "1")
    end

  end
end
