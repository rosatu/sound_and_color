Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :sounds, only: [:index]
      resources :sound_vibes, only: [:index]
      resources :vibes, only: [:index]

    end
  end
end
