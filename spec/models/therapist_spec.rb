require "rails_helper"

RSpec.describe Therapist, :type => :model do

  subject { Therapist.new(first_name: "test", last_name: "test", cred: "test", phone: "test", email: "test") }

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without a first_name" do
    subject.first_name = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a last_name" do
    subject.last_name = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a cred" do
    subject.cred = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a phone" do
    subject.phone = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a email" do
    subject.last_name = nil
    expect(subject).to_not be_valid
  end
end
