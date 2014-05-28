class SessionsController < ApplicationController
  include SessionsHelper
  #protect_from_forgery with: :exception
  protect_from_forgery :except => :login 
  after_filter :customheaders


  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if(user.nil?)
      user = User.find_by(name: params[:session][:email].downcase)
    end

    if user && user.authenticate(params[:session][:password])
      sign_in user
      redirect_back_or user
    else
      flash.now[:error] = 'Usuario no valido'
      render 'new'
    end
  end

  def login
    user = User.find_by(email: params[:username].downcase)
    if(user.nil?)
      user = User.find_by(name: params[:username].downcase)
    end

    if user && user.authenticate(params[:password])
      remember_token = sign_in user
      render :json => { :remember_token => remember_token, username: user.name, success: true}, status: :created  
    else
      render json: { success: false, message: 'Usuario no valido' }#, status: 401
    end


  end



  def destroy
    sign_out
    redirect_to root_url
  end

  private

  def customheaders
    response.headers["Access-Control-Allow-Origin"]="*"
    response.headers["Access-Control-Allow-Methods"]= "PUT, GET, POST, DELETE, OPTIONS"
    #response.headers["Access-Control-Allow-Headers"]= "*"
  end
end
