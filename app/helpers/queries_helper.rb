module QueriesHelper

  def mobile? 
      request.user_agent =~ /\b(Android|iPhone|Windows Phone|Opera Mobi|BackBerry)\b/i
  end

  def tablet?
    request.user_agent =~ /\b(iPad|PlayBook|Kindle)\b/i
  end 
end
