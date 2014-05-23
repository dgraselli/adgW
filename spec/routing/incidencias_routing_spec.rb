require "spec_helper"

describe IncidenciasController do
  describe "routing" do

    it "routes to #index" do
      get("/incidencias").should route_to("incidencias#index")
    end

    it "routes to #new" do
      get("/incidencias/new").should route_to("incidencias#new")
    end

    it "routes to #show" do
      get("/incidencias/1").should route_to("incidencias#show", :id => "1")
    end

    it "routes to #edit" do
      get("/incidencias/1/edit").should route_to("incidencias#edit", :id => "1")
    end

    it "routes to #create" do
      post("/incidencias").should route_to("incidencias#create")
    end

    it "routes to #update" do
      put("/incidencias/1").should route_to("incidencias#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/incidencias/1").should route_to("incidencias#destroy", :id => "1")
    end

  end
end
