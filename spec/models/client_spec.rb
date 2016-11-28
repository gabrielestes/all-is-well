
require "rails_helper"

RSpec.describe Client, :type => :model do

  t = Therapist.new(first_name: "test", last_name: "test", cred: "test", phone: "test", email: "test")
  t.save
  
  it "is valid with valid attributes" do
  expect(Client.new(therapist_id: t.id, first_name: "test", last_name: "test",
  birth_date: "1996-08-24 20:00:00", phone: "test", emergency: "test", current_meds: "test")).to be_valid
  end
  it "is not valid without a therapist_id" do
    client = Client.new(therapist_id: nil)
    expect(client).to_not be_valid
  end
  it "is not valid without a first_name" do
    client = Client.new(first_name: nil)
    expect(client).to_not be_valid
  end
  it "is not valid without a last_name" do
    client = Client.new(last_name: nil)
    expect(client).to_not be_valid
  end
  it "is not valid without a birth_date" do
    client = Client.new(birth_date: nil)
    expect(client).to_not be_valid
  end
  it "is not valid without a phone" do
    client = Client.new(phone: nil)
    expect(client).to_not be_valid
  end
  it "is not valid without a emergency" do
    client = Client.new(emergency: nil)
    expect(client).to_not be_valid
  end
  it "is not valid without a current_meds" do
    client = Client.new(current_meds: nil)
    expect(client).to_not be_valid
  end


end
