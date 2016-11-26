class Note < ApplicationRecord
  acts_as_readable :on => :created_at
  
  belongs_to :therapist
  belongs_to :client
end
