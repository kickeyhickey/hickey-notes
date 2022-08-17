Rails.application.routes.draw do
  resources :notes
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end