class Note < ApplicationRecord

  validates_presence_of :title, :message

  belongs_to :therapist
  belongs_to :client
end
