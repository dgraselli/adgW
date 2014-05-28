class User < ActiveRecord::Base

  before_save { self.name = name.downcase }
  before_save { self.email = email.downcase }
  before_create :create_remember_token

  validates :name,  presence: true, length: { maximum: 50 }, uniqueness: true
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX },
                    uniqueness: true

  validates :password, length: { minimum: 6 }
  
  has_secure_password


  def User.new_remember_token
    SecureRandom.urlsafe_base64
  end

  def User.hash(token)
    Digest::SHA1.hexdigest(token.to_s)
  end

  def to_s
    name
  end

  def send_mail
    UserMailer.welcome(self).deliver
  end

  private

    def create_remember_token
      self.remember_token = User.hash(User.new_remember_token)
    end

end
