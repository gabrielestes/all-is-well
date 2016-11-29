class Event < ApplicationRecord

  validates_presence_of :event_type, :description, :date
  belongs_to :client
end
