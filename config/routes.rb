Rails.application.routes.draw do
  root to: 'queries#home'

  resources :queries, only: [:create, :new]
  get '/faq', to: 'queries#faq'
  get '/contact-us', to: 'queries#contact'
  get '/get-a-quote', to: 'queries#quote'
  get '/vision', to: 'queries#vision'
  get '/oauth2callback', to: 'queries#auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html\
end
