class Api::V1::VibesController < ApplicationController
 def index
   @vibes = Vibe.all
   render json: @vibes
 end

 def create
   new_vibe = Vibe.new(vibe_params)
   vibe_params[:sounds].each do |sound_data|
     SoundVibe.create(sound_data, vibe_id: new_vibe.id)
   end

   if new_vibe.save
     render :json
   else
     render :json{ errors: "Nononononono! Ce n'est pas vrais!"}
   end   
 end

 private

 def vibe_params
   params.permit(:vibe).require(:name,:sounds)
 end

end
