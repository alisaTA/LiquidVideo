class Query < ApplicationRecord

  after_create :send_welcome_email




  private


  def send_welcome_email
    UserMailer.with(query: self).welcome
  end 
end
