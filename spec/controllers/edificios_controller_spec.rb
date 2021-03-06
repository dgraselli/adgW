require 'spec_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to specify the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator.  If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails.  There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.
#
# Compared to earlier versions of this generator, there is very limited use of
# stubs and message expectations in this spec.  Stubs are only used when there
# is no simpler way to get a handle on the object needed for the example.
# Message expectations are only used when there is no simpler way to specify
# that an instance is receiving a specific message.

describe EdificiosController do

  # This should return the minimal set of attributes required to create a valid
  # Edificio. As you add validations to Edificio, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) { { "calle" => "MyString" } }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # EdificiosController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "GET index" do
    it "assigns all edificios as @edificios" do
      edificio = Edificio.create! valid_attributes
      get :index, {}, valid_session
      assigns(:edificios).should eq([edificio])
    end
  end

  describe "GET show" do
    it "assigns the requested edificio as @edificio" do
      edificio = Edificio.create! valid_attributes
      get :show, {:id => edificio.to_param}, valid_session
      assigns(:edificio).should eq(edificio)
    end
  end

  describe "GET new" do
    it "assigns a new edificio as @edificio" do
      get :new, {}, valid_session
      assigns(:edificio).should be_a_new(Edificio)
    end
  end

  describe "GET edit" do
    it "assigns the requested edificio as @edificio" do
      edificio = Edificio.create! valid_attributes
      get :edit, {:id => edificio.to_param}, valid_session
      assigns(:edificio).should eq(edificio)
    end
  end

  describe "POST create" do
    describe "with valid params" do
      it "creates a new Edificio" do
        expect {
          post :create, {:edificio => valid_attributes}, valid_session
        }.to change(Edificio, :count).by(1)
      end

      it "assigns a newly created edificio as @edificio" do
        post :create, {:edificio => valid_attributes}, valid_session
        assigns(:edificio).should be_a(Edificio)
        assigns(:edificio).should be_persisted
      end

      it "redirects to the created edificio" do
        post :create, {:edificio => valid_attributes}, valid_session
        response.should redirect_to(Edificio.last)
      end
    end

    describe "with invalid params" do
      it "assigns a newly created but unsaved edificio as @edificio" do
        # Trigger the behavior that occurs when invalid params are submitted
        Edificio.any_instance.stub(:save).and_return(false)
        post :create, {:edificio => { "calle" => "invalid value" }}, valid_session
        assigns(:edificio).should be_a_new(Edificio)
      end

      it "re-renders the 'new' template" do
        # Trigger the behavior that occurs when invalid params are submitted
        Edificio.any_instance.stub(:save).and_return(false)
        post :create, {:edificio => { "calle" => "invalid value" }}, valid_session
        response.should render_template("new")
      end
    end
  end

  describe "PUT update" do
    describe "with valid params" do
      it "updates the requested edificio" do
        edificio = Edificio.create! valid_attributes
        # Assuming there are no other edificios in the database, this
        # specifies that the Edificio created on the previous line
        # receives the :update_attributes message with whatever params are
        # submitted in the request.
        Edificio.any_instance.should_receive(:update).with({ "calle" => "MyString" })
        put :update, {:id => edificio.to_param, :edificio => { "calle" => "MyString" }}, valid_session
      end

      it "assigns the requested edificio as @edificio" do
        edificio = Edificio.create! valid_attributes
        put :update, {:id => edificio.to_param, :edificio => valid_attributes}, valid_session
        assigns(:edificio).should eq(edificio)
      end

      it "redirects to the edificio" do
        edificio = Edificio.create! valid_attributes
        put :update, {:id => edificio.to_param, :edificio => valid_attributes}, valid_session
        response.should redirect_to(edificio)
      end
    end

    describe "with invalid params" do
      it "assigns the edificio as @edificio" do
        edificio = Edificio.create! valid_attributes
        # Trigger the behavior that occurs when invalid params are submitted
        Edificio.any_instance.stub(:save).and_return(false)
        put :update, {:id => edificio.to_param, :edificio => { "calle" => "invalid value" }}, valid_session
        assigns(:edificio).should eq(edificio)
      end

      it "re-renders the 'edit' template" do
        edificio = Edificio.create! valid_attributes
        # Trigger the behavior that occurs when invalid params are submitted
        Edificio.any_instance.stub(:save).and_return(false)
        put :update, {:id => edificio.to_param, :edificio => { "calle" => "invalid value" }}, valid_session
        response.should render_template("edit")
      end
    end
  end

  describe "DELETE destroy" do
    it "destroys the requested edificio" do
      edificio = Edificio.create! valid_attributes
      expect {
        delete :destroy, {:id => edificio.to_param}, valid_session
      }.to change(Edificio, :count).by(-1)
    end

    it "redirects to the edificios list" do
      edificio = Edificio.create! valid_attributes
      delete :destroy, {:id => edificio.to_param}, valid_session
      response.should redirect_to(edificios_url)
    end
  end

end
