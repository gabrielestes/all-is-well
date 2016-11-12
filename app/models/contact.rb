class Contact < ApplicationRecord
  belongs_to :client, index: true
end
