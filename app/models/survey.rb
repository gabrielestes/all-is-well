class Survey < ApplicationRecord
  belongs_to :client, index: true
end
