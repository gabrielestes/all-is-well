FactoryGirl.define do
  factory :therapist do
    first_name 'Jenn'
    last_name 'Smith'
    cred 'LCSW'
    phone '9192345678'
    email 'myname@example.com'
  end

  # factory :user do
  #   email 'example@example.com'
  #   password 'password'
  #   confirmation_password 'password'
  # end
  #
  # factory :therapist_with_user do
  #   after(:create) do |therapist|
  #     create(:user, therapist: therapist)
  #   end
  # end
end
