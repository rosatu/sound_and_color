class Sound < ApplicationRecord
  has_many :sound_vibes
  has_many :vibes, through: :sound_vibes
  validates :name, presence: true
end
