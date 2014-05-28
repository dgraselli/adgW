class UserMailer < ActionMailer::Base
  default from: "from@example.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.welcome.subject
  #
  def welcome(user)
    @user = user
    mail to: user.email
  end

  def send_factura(lectura, id_plan, email)
    @lectura = lectura

    if(@lectura.deuda.present?)
      @monto = @lectura.deuda[:monto] 
      #@id_plan = id_plan
      #@planes = @lectura.deuda[:planes] 
      #@plan = @lectura.deuda[:planes].select{|x| x[:id] == id_plan}[0][:desc]

      mail to: email
    end

  end
end
