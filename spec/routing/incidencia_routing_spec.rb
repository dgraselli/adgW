require "spec_helper"

describe IncidenciaController do
  describe "routing" do

    it "routes to #index" do
      get("/incidencia").should route_to("incidencia#index")
    end

    it "routes to #new" do
      get("/incidencia/new").should route_to("incidencia#new")
    end

    it "routes to #show" do
      get("/incidencia/1").should route_to("incidencia#show", :id => "1")
    end

    it "routes to #edit" do
      get("/incidencia/1/edit").should route_to("incidencia#edit", :id => "1")
    end

    it "routes to #create" do
      post("/incidencia").should route_to("incidencia#create")
    end

    it "routes to #update" do
      put("/incidencia/1").should route_to("incidencia#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/incidencia/1").should route_to("incidencia#destroy", :id => "1")
    end

  end
end
