class Track < ActiveRecord::Base
  belongs_to :user

  def self.search(params)
    r = all

    logger.debug params

    if params[:user].present?
      r = r.where(user: User.find_by_name(params[:user]))
    end
    
    if params[:desde].present?
      r = r.where('created_at > ?', DateTime.now - params[:desde].to_i.hours)
    else
      r = r.where('created_at > ?', DateTime.now - 48)
    end



    r
  end


  def marker_tooltip
    "(ACC:#{pos})"
  end
end
