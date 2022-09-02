Rails.application.routes.draw do
  resources :notes 
  resources :tags
  
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
