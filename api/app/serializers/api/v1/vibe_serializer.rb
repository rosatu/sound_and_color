class Api::V1::VibeSerializer < ActiveModel::Serializer
  has_many :sound_vibes
  attributes :id, :name
end
