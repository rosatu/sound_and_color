class Sound < ApplicationRecord
  has_many :sound_vibes
  validates :name, presence: true
end
