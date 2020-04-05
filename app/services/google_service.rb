require "google/apis/sheets_v4"
require "googleauth"
require "googleauth/stores/file_token_store"
require "fileutils"
require 'byebug'

class GoogleService
  SHEET_NAME = 'LiquidVideo Queries'
  SPREADSHEET_ID = "1x-3rACNxWEb7MvSS72Y5B2uGecGhWookNHOEmM-_e28"
  APPLICATION_NAME = 'Google Sheets API Ruby Quickstart'.freeze
  CREDENTIALS_PATH = 'credentials.json'.freeze
  TOKEN_PATH = (Rails.root.to_s + "/token.yaml").freeze
  SCOPE = Google::Apis::SheetsV4::AUTH_SPREADSHEETS

  def initialize
    @service = set_service
  end

  def append_values(_values)

    values = [[]]
    values = _values
    value_range = Google::Apis::SheetsV4::ValueRange.new(values: values)
    result = @service.append_spreadsheet_value(SPREADSHEET_ID,
                                              SHEET_NAME,
                                              value_range,
                                              value_input_option: 'RAW')
    puts "#{result.updates.updated_cells} cells appended."
    result
  end





    private

  def set_service
    service = Google::Apis::SheetsV4::SheetsService.new
    service.client_options.application_name = APPLICATION_NAME
    service.authorization = authorize

    return service
  end



  def authorize
    path = File.join(File.absolute_path('.'), 'app/services/credentials.json')
    file = File.open(path, 'r+')
    credentials_hash = JSON.parse(file.read)
    client_id = Google::Auth::ClientId.from_hash credentials_hash
    token_store = Google::Auth::Stores::FileTokenStore.new file: TOKEN_PATH
    authorizer = Google::Auth::UserAuthorizer.new client_id, SCOPE, token_store
    user_id = "default"
    credentials = authorizer.get_credentials user_id
    if credentials.nil?
      url = authorizer.get_authorization_url base_url: "https://309b6f3e.ngrok.io"
      puts "Open the following URL in the browser and enter the " \
           "resulting code after authorization:\n\n\n" + url
      code = gets
      credentials = authorizer.get_and_store_credentials_from_code(
        user_id: user_id, code: code, base_url: "https://309b6f3e.ngrok.io"
      )
    end
    credentials
  end

end
