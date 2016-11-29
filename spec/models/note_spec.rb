require 'rails_helper'

RSpec.describe Note, :type => :model do

  subject { Note.new }

  therapist = Therapist.create(first_name: 'John', last_name: 'Smith', cred: 'LCSW', phone: '9192345678', email: 'name@example.com')
  client = Client.create(therapist_id: therapist.id, first_name: 'Sue', last_name: 'Jones', birth_date: '10-23-1990', phone: '9199876543')

  it "should be valid when all attributes are completed" do
    subject.therapist_id = therapist.id
    subject.client_id = client.id
    subject.title = 'Notes from 11/17 session'
    subject.message = 'Talked about transcendental meditation and rest'
    expect(subject).to be_valid
  end

  it "should be invalid when no therapist_id is given" do
    subject.client_id = client.id
    subject.title = 'Notes from 11/17 session'
    subject.message = 'Talked about transcendental meditation and rest'
    expect(subject).to_not be_valid
  end

  it "should be invalid when no client_id is given" do
    subject.therapist_id = therapist.id
    subject.title = 'Notes from 11/17 session'
    subject.message = 'Talked about transcendental meditation and rest'
    expect(subject).to_not be_valid
  end

  it "should be invalid when no title is given" do
    subject.therapist_id = therapist.id
    subject.client_id = client.id
    subject.message = 'Talked about transcendental meditation and rest'
    expect(subject).to_not be_valid
  end

  it "should be invalid when no message is given" do
    subject.therapist_id = therapist.id
    subject.client_id = client.id
    subject.title = 'Notes from 11/17 session'
    expect(subject).to_not be_valid
  end
end
