class Note < ApplicationRecord
  belongs_to :therapist
  belongs_to :client
end
