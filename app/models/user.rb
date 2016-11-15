class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  belongs_to :userable, polymorphic: true

  has_many :posts
  has_many :notes
  has_many :surveys
end

# therapist = Therapist.first
# User.new(
#   userable_id: therapist.id,
#   userable_type: therapist.class.name,
#   name: 'Master Gabriel'
#   ).save

# therapist = Therapist.first
# therapist.users.build(email: "Master of Lorem Ipsum", password: 'kingkong1', password_confirmation: 'kingkong1').save
# therapist.users.first.email
