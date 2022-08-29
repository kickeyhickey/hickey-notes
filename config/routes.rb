Rails.application.routes.draw do
  resources :notes do
  resources :tags
  end
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
