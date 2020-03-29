require 'test_helper'

class QueriesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get queries_home_url
    assert_response :success
  end

end
