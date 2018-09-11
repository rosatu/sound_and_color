class Api::V1::VibesController < ApplicationController
 def index
   @vibes = Vibe.all
   render json: @vibes
 end

end
