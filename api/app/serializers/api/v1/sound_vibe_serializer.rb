class Api::V1::SoundVibeSerializer < ActiveModel::Serializer
  belongs_to :vibe
  attributes :id, :sound_id, :vibe_id, :volume
end
