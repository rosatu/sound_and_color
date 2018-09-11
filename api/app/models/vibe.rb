class Vibe < ApplicationRecord
  has_many :sound_vibes
  has_many :sounds, through: :sound_vibes

end
