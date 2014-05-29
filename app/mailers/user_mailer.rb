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
      @plan = @lectura.plan_de_pago

      mail to: email
    end

  end
end
