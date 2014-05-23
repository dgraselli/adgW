class JobsController < ApplicationController
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
