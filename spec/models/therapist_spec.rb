require "rails_helper"

RSpec.describe Therapist, :type => :model do
  it "is valid with valid attributes" do
  expect(Therapist.new(first_name: "test", last_name: "test", cred: "test", phone: "test", email: "test")).to be_valid
  end
  it "is not valid without a first_name" do
    therapist = Therapist.new(first_name: nil)
    expect(therapist).to_not be_valid
  end
  it "is not valid without a last_name" do
    therapist = Therapist.new(last_name: nil)
    expect(therapist).to_not be_valid
  end
  it "is not valid without a cred" do
    therapist = Therapist.new(cred: nil)
    expect(therapist).to_not be_valid
  end
  it "is not valid without a phone" do
    therapist = Therapist.new(phone: nil)
    expect(therapist).to_not be_valid
  end
  it "is not valid without a email" do
    therapist = Therapist.new(last_name: nil)
    expect(therapist).to_not be_valid
  end

end
