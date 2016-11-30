FactoryGirl.define do
  factory :client_user, class: 'User' do
    association :userable, factory: :client
    email "#{FFaker::Internet.free_email}"
    password 'password'
    password_confirmation 'password'
  end

  factory :therapist_user, class: 'User' do
    association :userable, factory: :therapist
    email "#{FFaker::Internet.free_email}"
    password 'password'
    password_confirmation 'password'
  end

  factory :client do
    first_name 'Gabe'
    last_name 'Sullivan'
    birth_date '1996-12-12'
    phone '9199876543'
    wellness '67'
    general_prac 'Dr. Ellis'
    gender 'M'
    current_meds 'none'
  end

  factory :therapist do
    first_name 'Jenn'
    last_name 'Smith'
    cred 'LCSW'
    phone '9192345678'
    email 'myname@example.com'
  end

  factory :user do
    email 'user@example.com'
    password 'password'
    password_confirmation 'password'
  end
end
