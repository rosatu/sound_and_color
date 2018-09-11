class Api::V1::SoundSerializer < ActiveModel::Serializer
  has_many :vibes

  attributes :id, :name, :initial_color_value, :audio_file, :icon_image
end
