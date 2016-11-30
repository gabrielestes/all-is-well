require 'rails_helper'
require 'factory_girl_rails'
require 'devise'

RSpec.describe TherapistsController, :type => :controller do
include Devise::TestHelpers
  describe "GET #index" do

    before(:all) do
      @user = create :therapist_user
      @therapist = Therapist.first
    end

    it 'assigns @therapist' do
      sign_in @user
      debugger
      therapist = create :therapist
      get :index
      assigns(:therapist).should eq([therapist])
    end
  end
end
