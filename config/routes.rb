Rails.application.routes.draw do
  get 'therapist/:id' => 'therapists#index'

  devise_for :users
end
