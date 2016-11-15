# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def rand_num
  [*1..10].sample
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
