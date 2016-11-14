class Therapist < ApplicationRecord
  has_one :user, :as => :userable, dependent: :destroy
  has_many :clients

  accepts_nested_attributes_for :user

end
