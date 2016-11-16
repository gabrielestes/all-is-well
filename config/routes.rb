Rails.application.routes.draw do

  get 'notes/index'

  post 'notes/create'

  patch 'notes/update'

  delete 'notes/delete'

  get 'client/new'

  get 'client/:id' => 'clients#index'

  post 'client/:id' => 'clients#new'

  get '/new' => 'registrations#new', as: 'new_user'

  get '/index' => 'registrations#index'

  devise_scope :user do
    get 'sign_in', to: 'devise/sessions#new'
  end

  # devise_scope :user do
  #   get 'therapist/sign_up', to: 'devise/registrations#new'
  # end

  get 'therapist/:id' => 'therapists#index'

# T- client page, id is id of the client
  get 'therapist/client/:id'    => 'therapists#show'

# Client calendar, id is client id
  get 'therapist/calendar/:id'  => 'therapists#calendar'

# A client's posts and surveys, id is client id
  get 'therapist/activity/:id'  => 'therapists#activity'

# Therapist profile, id is therapist
  get 'therapist/t_profile/:id' => 'therapists#t_profile'

# Client profile, id is client's id
  get 'therapist/c_profile/:id' => 'therapists#c_profile'


  devise_for :users
end
