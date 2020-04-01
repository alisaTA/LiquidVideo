require "google/apis/sheets_v4"
require "googleauth"
require "googleauth/stores/file_token_store"
require "fileutils"
require 'byebug'

OOB_URI = "https://309b6f3e.ngrok.io/auth".freeze
APPLICATION_NAME = "Google Sheets API Ruby Quickstart".freeze
CREDENTIALS_PATH = "credentials.json".freeze
# The file token.yaml stores the user's access and refresh tokens, and is
# created automatically when the authorization flow completes for the first
# time.
TOKEN_PATH = "token.yaml".freeze
SCOPE = Google::Apis::SheetsV4::AUTH_SPREADSHEETS


# Ensure valid credentials, either by restoring from the saved credentials
# files or intitiating an OAuth2 authorization. If authorization is required,
# the user's default browser will be launched to approve the request.
#
# @return [Google::Auth::UserRefreshCredentials] OAuth2 credentials
def authorize
  path = File.join(File.absolute_path('.'), 'app/services/credentials.json')
  file = File.open(path, 'r')
  credentials_hash = JSON.parse(file.read)
  client_id = Google::Auth::ClientId.from_hash credentials_hash
  token_store = Google::Auth::Stores::FileTokenStore.new file: TOKEN_PATH
  authorizer = Google::Auth::UserAuthorizer.new client_id, SCOPE, token_store
  user_id = "default"
  credentials = authorizer.get_credentials user_id
  if credentials.nil?
    url = authorizer.get_authorization_url base_url: "https://309b6f3e.ngrok.io"
    puts "Open the following URL in the browser and enter the " \
         "resulting code after authorization:\n" + url
    code = gets
    credentials = authorizer.get_and_store_credentials_from_code(
      user_id: user_id, code: code, base_url: OOB_URI
    )
  end
  credentials
end

# Initialize the API


# Prints the names and majors of students in a sample spreadsheet:
# https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
spreadsheet_id = "1NjJB1WFf_Ew2yK8WHtpTU85zcg9SqXzahwQZzOUXIZM"


  def append_values(spreadsheet_id, range_name, _values)
    service = Google::Apis::SheetsV4::SheetsService.new
    service.client_options.application_name = APPLICATION_NAME
    service.authorization = authorize
    # [START sheets_append_values]
    values = [
      [
        # Cell values ...
      ],
      # Additional rows ...
    ]
    # [START_EXCLUDE silent]
    values = _values
    # [END_EXCLUDE]
    value_range = Google::Apis::SheetsV4::ValueRange.new(values: values)
    result = service.append_spreadsheet_value(spreadsheet_id,
                                              range_name,
                                              value_range,
                                              value_input_option: 'RAW')
    puts "#{result.updates.updated_cells} cells appended."
    # [END sheets_append_values]
    result
  end

  p append_values(spreadsheet_id, 'New Sheet Name', [['testnig', 'hello'], ['tftftf']] )
