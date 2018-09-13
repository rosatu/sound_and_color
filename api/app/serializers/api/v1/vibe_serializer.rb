class Api::V1::VibeSerializer < ActiveModel::Serializer
  has_many :sound_vibes
  has_many :sounds
  attributes :id, :name
end
