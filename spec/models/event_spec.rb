# require 'rails_helper'
#
# RSpec.describe Event, :type => :model do
#
#   subject { Event.new }
#
#   therapist = Therapist.create(first_name: 'John', last_name: 'Smith', cred: 'LCSW', phone: '9192345678', email: 'name@example.com')
#   client = Client.create(therapist_id: therapist.id, first_name: 'Sue', last_name: 'Jones', birth_date: '10-23-1990', phone: '9199876543')
#
#   it 'is valid if all attributes are valid' do
#     subject.client_id = client.id
#     subject.event_type = 'positive'
#     subject.date = '2016-11-07'
#     subject.description = 'Lorem Ipsum'
#     subject.read = false
#     expect(subject).to be_valid
#   end
#
#   it 'is invalid without a client id' do
#     subject.event_type = 'positive'
#     subject.date = '2016-11-07'
#     subject.description = 'Lorem Ipsum'
#     subject.read = false
#     expect(subject).to_not be_valid
#   end
#
#   it 'is invalid without an event_type' do
#     subject.client_id = client.id
#     subject.date = '2016-11-07'
#     subject.description = 'Lorem Ipsum'
#     subject.read = false
#     expect(subject).to_not be_valid
#   end
#
#   it 'is invalid without a description' do
#     subject.client_id = client.id
#     subject.event_type = 'positive'
#     subject.date = '2016-11-07'
#     subject.read = false
#     expect(subject).to_not be_valid
#   end
#
#   it 'is invalid without a date' do
#     subject.client_id = client.id
#     subject.event_type = 'positive'
#     subject.description = 'Lorem Ipsum'
#     subject.read = false
#     expect(subject).to_not be_valid
#   end
# end
