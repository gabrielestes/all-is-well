require 'rails_helper'

RSpec.describe User, :type => :model do

  subject { User.new }

  before(:all) do
    @therapist = Therapist.create(first_name: 'John', last_name: 'Smith', cred: 'LCSW', phone: '9191234567')
  end

  it "is valid with valid attributes" do
    expect(@therapist).to be_valid
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

  it "is invalid when an email is invalid" do
    subject.email = 'nameexamplecom'
    subject.password = 'password'
    subject.password_confirmation = 'password'
    subject.userable = therapist
    expect(subject).to_not be_valid
  end

  it "is invalid when a password is less than six characters" do
    subject.email = 'name@example.com'
    subject.password = 'pass'
    subject.password_confirmation = 'pass'
    subject.userable = therapist
    expect(subject).to_not be_valid
  end

  it 'should belong to userable' do
    expect(:user).to belong_to :userable
  end
end
