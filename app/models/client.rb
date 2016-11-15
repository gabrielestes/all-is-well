class Client < ApplicationRecord
  has_one :user, as: :userable, dependent: :destroy
  has_many :contacts
  has_many :posts
  has_many :notes
  belongs_to :therapist
end
