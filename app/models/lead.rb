class Lead < MailForm::Base
  attribute :fullname,      :validate => true, :message => "Put some address please"
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :org
  attribute :phone
  attribute :nickname,  :captcha  => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "My Contact Form",
      :to => "andy@banzaihq.com",
      :from => %("#{fullname} #{email} #{phone} #{org}") 
    }
  end
end
