class User < ApplicationRecord

  validates_presence_of :email, :password, :password_confirmation, :userable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  belongs_to :userable, polymorphic: true

  has_many :posts
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
