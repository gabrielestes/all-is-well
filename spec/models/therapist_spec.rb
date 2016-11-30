require "rails_helper"
require 'factory_girl_rails'

RSpec.describe Therapist, :type => :model do

  before do
    @therapist = create :therapist
  end

  it "is valid with valid attributes" do
    expect(@therapist).to be_valid
  end

  it "is not valid without a first_name" do
    @therapist.first_name = nil
    expect(@therapist).to_not be_valid
  end

  it "is not valid without a last_name" do
    @therapist.last_name = nil
    expect(@therapist).to_not be_valid
  end

  it "is not valid without a cred" do
    @therapist.cred = nil
    expect(@therapist).to_not be_valid
  end

  it "is not valid without a phone" do
    @therapist.phone = nil
    expect(@therapist).to_not be_valid
  end

  it "is not valid without a email" do
    @therapist.last_name = nil
    expect(@therapist).to_not be_valid
  end
end
