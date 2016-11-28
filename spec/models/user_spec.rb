require 'rails_helper'

RSpec.describe User, :type => :model do
  it "is valid with valid attributes" do
    t = Therapist.create(first_name: 'John', last_name: 'Smith', cred: 'LCSW', phone: '9191234567')
    expect(User.new(
                    email: 'name@example.com',
                    password: 'password',
                    password_confirmation: 'password',
                    userable: t
                    )).to be_valid
  end

  it "is invalid without an email"
  it "is invalid without a password"
  it "is invalid without a userable (client or therapist)"
end
