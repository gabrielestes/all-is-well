require 'rails_helper'


RSpec.describe User, :type => :model do

  subject { User.new }

  therapist = Therapist.create(first_name: 'John', last_name: 'Smith', cred: 'LCSW', phone: '9191234567')

  it "is valid with valid attributes" do
    subject.email = 'name@example.com'
    subject.password = 'password'
    subject.password_confirmation = 'password'
    subject.userable = therapist
    expect(subject).to be_valid
  end

  it "is invalid without an email" do
    subject.password = 'password'
    subject.password_confirmation = 'password'
    subject.userable = therapist
    expect(subject).to_not be_valid
  end

  it "is invalid without a password" do
    subject.email = 'name@example.com'
    subject.password_confirmation = 'password'
    subject.userable = therapist
    expect(subject).to_not be_valid
  end

  it "is invalid without a password_confirmation" do
    subject.email = 'name@example.com'
    subject.password = 'password'
    subject.userable = therapist
    expect(subject).to_not be_valid
  end

  it "is invalid without a userable (client or therapist)" do
    subject.email = 'name@example.com'
    subject.password = 'password'
    subject.password_confirmation = 'password'
    expect(subject).to_not be_valid
  end
end
