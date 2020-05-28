module QueriesHelper

  def mobile? 
      request.user_agent =~ /\b(Android|iPhone|Windows Phone|Opera Mobi|Kindle|BackBerry)\b/i
  end

  def tablet?
    request.user_agent =~ /\b(iPad|PlayBook)\b/i
  end 
end
