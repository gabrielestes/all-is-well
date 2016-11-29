require 'rails_helper'

RSpec.describe Event, :type => :model do

  subject { Post.new }

  therapist = Therapist.create(first_name: 'John', last_name: 'Smith', cred: 'LCSW', phone: '9192345678', email: 'name@example.com')
  client = Client.create(therapist_id: therapist.id, first_name: 'Sue', last_name: 'Jones', birth_date: '10-23-1990', phone: '9199876543')

  it 'is valid when given data for all attributes' do
    subject.client_id = client.id
    subject.title = 'Afternoon Walk'
    subject.body = 'Went for a walk after feeling overwhelmed by work today.'
    expect(subject).to be_valid
  end

  it 'is invalid when not given client_id' do
    subject.title = 'Afternoon Walk'
    subject.body = 'Went for a walk after feeling overwhelmed by work today.'
    expect(subject).to_not be_valid
  end

  it 'is invalid when not given a title' do
    subject.client_id = client.id
    subject.body = 'Went for a walk after feeling overwhelmed by work today.'
    expect(subject).to_not be_valid
  end

  it 'is invalid when not given a body' do
    subject.client_id = client.id
    subject.title = 'Afternoon Walk'
    expect(subject).to_not be_valid
  end
end
