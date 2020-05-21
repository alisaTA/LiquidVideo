class Query < ApplicationRecord
  after_create :send_welcome_email_and_add_to_sheets

  validates :first_name, :last_name,  presence: true

  private


  def send_welcome_email_and_add_to_sheets
    UserMailer.with(query: self).welcome.deliver_now
    google_service = GoogleService.new 
    google_service.append_values([format_query_data])
  end 


  def format_query_data
    [self.created_at,self.company, 
     self.first_name, self.last_name, 
     self.email, self.phone, 
     self.facility_count, self.camera_count,
     self.radar_count]
  end 
end
