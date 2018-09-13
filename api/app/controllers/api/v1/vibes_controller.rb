class Api::V1::VibesController < ApplicationController
 def index
   @vibes = Vibe.all
   render json: @vibes
 end

 def create
   new_vibe = Vibe.new(name: params[:name])
     params[:sounds].each do |sound_data|
       new_vibe.sound_vibes << SoundVibe.create(sound_id: sound_data[:sound_id], volume: sound_data[:volume])
   end

   if new_vibe.save
     render :json
   else
     render :json[errors: "Nononononono! Ce n'est pas vrais!"]
   end
 end

 def show
   @vibe = Vibe.find(params[:id])
   render json: @vibe
 end

end
