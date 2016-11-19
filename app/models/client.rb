class Client < ApplicationRecord
  has_one :user, as: :userable, dependent: :destroy
  has_many :contacts
  has_many :posts
  has_many :notes
  has_many :surveys
  belongs_to :therapist
end
