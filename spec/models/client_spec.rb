
require "rails_helper"

RSpec.describe Client, :type => :model do

  t = Therapist.new(first_name: "test", last_name: "test", cred: "test", phone: "test", email: "test")
  t.save

  subject { Client.new(therapist_id: t.id, first_name: "test", last_name: "test",
  birth_date: "1996-08-24 20:00:00", phone: "test", current_meds: "test")}

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without a therapist_id" do
    subject.therapist_id = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a first_name" do
    subject.first_name = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a last_name" do
    subject.last_name = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a birth_date" do
    subject.birth_date = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a phone" do
    subject.phone = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a current_meds" do
    subject.current_meds = nil
    expect(subject).to_not be_valid
  end


end
