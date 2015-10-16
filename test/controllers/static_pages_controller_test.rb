require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get customers" do
    get :customers
    assert_response :success
  end

  test "should get pricing" do
    get :pricing
    assert_response :success
  end

end
