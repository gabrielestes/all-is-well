class Client < ApplicationRecord
  has_one :user, as: :userable, dependent: :destroy
  has_many :contacts
  belongs_to :therapist
end
