Rails.application.routes.draw do
  root to: 'queries#home'

  get '/oauth2callback', to: 'queries#auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html\
end
