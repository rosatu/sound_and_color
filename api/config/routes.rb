Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :sounds, only: [:index]
      resources :sound_vibes, only: [:index, :create]
      resources :vibes, only: [:index, :create, :show]

    end
  end
end
