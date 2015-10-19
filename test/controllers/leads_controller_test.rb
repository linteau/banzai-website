require 'test_helper'

class LeadsControllerTest < ActionController::TestCase
  test "should get lead" do
    get :lead
    assert_response :success
  end

end
