class Post < ApplicationRecord
  acts_as_readable :on => :created_at

  belongs_to :client
end
