class JobsController < ApplicationController
    include SessionsHelper
    before_filter :signed_in_user
    
  def index
  end

  def progress
    @job = Delayed::Job.find(params[:id])
    render :text => @job.progress
  end
  
  def show
    @job = Delayed::Job.find(params[:id])
    respond_to do |format|
      # ...
      format.js { render :json => @job }
    end
  end
end
