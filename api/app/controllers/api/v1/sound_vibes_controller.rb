class Api::V1::SoundVibesController < ApplicationController
 def index
   @soundVibes = SoundVibe.all
   render json: @soundVibes
 end

end
