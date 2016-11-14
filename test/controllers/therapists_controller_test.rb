require 'test_helper'

class TherapistsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get therapists_index_url
    assert_response :success
  end

end
