class Post < ApplicationRecord
  belongs_to :user, index: true
end
