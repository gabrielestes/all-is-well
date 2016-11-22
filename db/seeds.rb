# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
def rand_num
  [*1..10].sample
end

def rand_score
  [*0..3].sample
end

def rand_init
  [*"A".."Z"].sample
end

def rand_dob
  "#{[*1..12].sample}-#{[*1..28].sample}-#{[*1950..2000].sample}"
end

def rand_relation
  ["Sister", "Brother", "Father", "Mother"].sample
end

def rand_cred
  ["LCSW, MA", "LCSW", "MSW, LCSW"].sample
end

def rand_survey
  [*1..5].sample
end

def event_type
  types = ["positive", "negative"].sample
end

def date
  day = [*10..30].sample
  "2016-11-#{day}"
end

def relation
  ["parent", "sibling", "child", "friend"].sample
end

count = 1
5.times do
  t = Therapist.create(
    first_name: FFaker::Name.first_name,
    last_name: FFaker::Name.last_name,
    cred: rand_cred,
    phone: FFaker::PhoneNumber.phone_number,
    email: FFaker::Internet.free_email
  )
  user = User.create(
    email: FFaker::Internet.free_email,
    password: FFaker::Internet.password,
    userable: t
  )
  user.password_confirmation = user.password
  user.save

  4.times do
    c = Client.create(
      therapist_id: t.id,
      first_name: FFaker::Name.first_name,
      last_name: FFaker::Name.last_name,
      initial: rand_init,
      birth_date: rand_dob,
      phone: FFaker::PhoneNumber.phone_number,
      # emergency:
      wellness: rand_num
    )

    u = User.create(
      email: FFaker::Internet.free_email,
      password: FFaker::Internet.password,
      userable: c
    )
    u.password_confirmation = u.password
    u.save
  end
end

count = 1
5.times do
  4.times do
    n = Note.create(
      therapist_id: count,
      client_id: count,
      title: FFaker::Book.title,
      message: FFaker::Lorem.sentence,
      shared: true
    )
  end
  count += 1
end

count = 1
5.times do
  3.times do
    event = Event.create(
      client_id: count,
      event_type: event_type,
      date: date,
      description: FFaker::CheesyLingo.sentence
    )
  end
  count += 1
end

t = Therapist.create(
    first_name: "Hugh",
    last_name: "Mungus",
    cred: "MD",
    phone: "9191919191",
    email: "hugh@mungus.com"
    )

user = User.create(
email: "hugh@mungus.com",
password: "password",
password_confirmation: "password",
userable: t
)

4.times do
  c = Client.create(
    therapist_id: 6,
    first_name: FFaker::Name.first_name,
    last_name: FFaker::Name.last_name,
    initial: rand_init,
    birth_date: rand_dob,
    phone: FFaker::PhoneNumber.phone_number,
    # emergency:
    wellness: rand_num
  )

  u = User.create(
    email: FFaker::Internet.free_email,
    password: FFaker::Internet.password,
    userable: c
  )
  u.password_confirmation = u.password
  u.save
end

count = 0
24.times do
  4.times do
    n = Post.create(
      client_id: count,
      sharable: true,
      title: FFaker::Book.title,
      body: FFaker::Lorem.sentence,
    )
  end
  count += 1
end

count = 1
24.times do
  contact = Contact.create(
    client_id: count,
    first_name: FFaker::Name.first_name,
    last_name: FFaker::Name.last_name,
    relation: relation,
    phone: FFaker::PhoneNumber.phone_number
  )
  count += 1
end

count = 1
24.times do
  4.times do
    survey = Survey.new(
      client_id: count,
      read: false,
      q1: rand_score,
      q2: rand_score,
      q3: rand_score,
      q4: rand_score,
      q5: rand_score,
      q6: rand_score,
      q7: rand_score,
      q8: rand_score,
      q9: rand_score
    )
    survey.total = survey.q1 + survey.q2 + survey.q3 + survey.q4 + survey.q5 + survey.q6 + survey.q7 + survey.q8 + survey.q9
    survey.save!
  end
  count += 1
end
