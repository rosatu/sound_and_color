class Api::V1::VibeSerializer < ActiveModel::Serializer
  has_many :sound_vibes
  has_many :sounds
  attributes :id

  attribute :random_stuff

  def random_stuff
    'soo random'
  end
end
