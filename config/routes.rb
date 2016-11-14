Rails.application.routes.draw do
  get 'therapists/index'

  devise_for :users
end
