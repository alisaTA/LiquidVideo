class Query < ApplicationRecord
  after_create :send_welcome_email_and_add_to_sheets




  private


  def send_welcome_email_and_add_to_sheets
    UserMailer.with(query: self).welcome.deliver_now
    google_service = GoogleService.new 
    google_service.append_values([format_query_data])
  end 


  def format_query_data
    [self.created_at,self.company, self.firstname, self.lastname, self.email, self.phone]
  end 
end
