class UsersController < ApplicationController
    include SessionsHelper
    before_filter :signed_in_user

 before_action :signed_in_user, only: [:index, :edit, :update, :destroy, :show]
 before_action :correct_user,   only: [:edit, :update]
 before_action :admin_user,     only: :destroy

  def index
    @users = User.paginate(page: params[:page])
  end

  def new
  	@user = User.new
  end

  def show
    @user = User.find(params[:id]);
  end

  def preferences
    @user = current_user
    render :show
  end

  def track
    Track.create user: current_user, lat: params[:lat], lon: params[:lng], pos: params[:pos].to_s, device: params[:device].to_s
    render :json => {result: 'ok'}
  end

  def tracks

    @tracks = Track.search(params) 
    @user_cant = @tracks.group(:user).count #.merge( User.all.map{|u| [u , 0]} )
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "Welcome to the Sample App!"
      #UserMailer.welcome(@user).deliver
      redirect_to @user
    else
      render 'new'
    end
  end

  def editwrong_user
     @user = User.find(params[:id])
  end

  def update
    if @user.update_attributes(user_params)
      flash[:success] = "Profile updated"
      #UserMailer.welcome(@user).deliver
      redirect_to @user
    else
      render 'edit'
    end
  end

  def destroy
    User.find(params[:id]).destroy
    flash[:success] = "User deleted."
    redirect_to users_url
  end

    private
    
    def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation)
    end

    def admin_user
      redirect_to(root_url) unless current_user.admin?
    end

    # Before filters

    def correct_user
      @user = User.find(params[:id])
      #redirect_to(root_url) unless current_user?(@user)
    end
end
