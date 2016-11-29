require 'rails_helper'

RSpec.describe Survey, :type => :model do

  subject { Survey.new }

  before(:all) do
    @therapist = Therapist.new(id: 1, first_name: 'John', last_name: 'Smith', cred: 'LCSW', phone: '9192345678', email: 'name@example.com')
    @client = Client.new(id: 1, therapist_id: 1, first_name: 'Sue', last_name: 'Jones', birth_date: '10-23-1990', phone: '9199876543')
  end
  
  it 'is valid if all attributes are completed' do
    subject.client_id = @client.id
    subject.q1 = 0
    subject.q2 = 1
    subject.q3 = 2
    subject.q4 = 3
    subject.q5 = 0
    subject.q6 = 1
    subject.q7 = 2
    subject.q8 = 3
    subject.q9 = 0
    subject.total = subject.q1 + subject.q2 + subject.q3 + subject.q4 + subject.q5 + subject.q6 + subject.q7 + subject.q8 + subject.q9
    expect(subject).to be_valid
  end

  it 'is invalid if total does not equal the sum of all questions' do
    subject.client_id = @client.id
    subject.q1 = 0
    subject.q2 = 1
    subject.q3 = 2
    subject.q4 = 3
    subject.q5 = 0
    subject.q6 = 1
    subject.q7 = 2
    subject.q8 = 3
    subject.q9 = 0
    subject.total = subject.q1 + subject.q2 + subject.q3 + subject.q4 + subject.q5 + subject.q6 + subject.q7 + subject.q8 + subject.q9
    expect(subject.total).to eq(12)
  end

  it 'is invalid if no client_id is provided' do
    subject.q1 = 0
    subject.q2 = 1
    subject.q3 = 2
    subject.q4 = 3
    subject.q5 = 0
    subject.q6 = 1
    subject.q7 = 2
    subject.q8 = 3
    subject.q9 = 0
    subject.total = subject.q1 + subject.q2 + subject.q3 + subject.q4 + subject.q5 + subject.q6 + subject.q7 + subject.q8 + subject.q9
    expect(subject).to_not be_valid
  end
end
