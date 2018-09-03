Rails.application.routes.draw do
  
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      resources :scoreboards, only: [:index, :create]
      get 'search', to: 'scoreboards#search'
    end
  end

end
