class Query < ApplicationRecord
  after_create :send_welcome_email_and_add_to_sheets

  validates :full_name, presence: true

  def format_name
    self.full_name.split(' ')
  end 

  private


  def send_welcome_email_and_add_to_sheets
    UserMailer.with(query: self).welcome.deliver_now
    google_service = GoogleService.new 
    google_service.append_values([format_query_data])
  end 


  def format_query_data
    firstname, lastname = self.format_name
    [self.created_at,self.company, firstname, lastname, self.email, self.phone]
  end 
end
