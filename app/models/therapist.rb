class Therapist < ApplicationRecord
  validates_presence_of :first_name, :last_name, :cred, :phone, :email

  has_one :user, :as => :userable, dependent: :destroy
  has_many :clients
  has_many :notes
  accepts_nested_attributes_for :user

end
