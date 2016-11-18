Rails.application.routes.draw do

  get 'client/entries' => 'entries#entries_index'

  get 'client/events' => 'events#events_index'

  get 'client/surveys' => 'surveys#surveys_index'

  get '/therapist/profile/:id' => 'therapists#t_profile'

# Create a new note
  get 'therapist/note' => 'notes#create'

  get 'client/new'

  get 'client/:id' => 'clients#index'

  post 'client' => 'clients#new', as: 'new_client'

  get 'register' => 'registrations#new', as: 'register_user'

  post 'register' => 'registrations#new'

  get '/index' => 'registrations#index'

  authenticated :user do
    root :to => 'therapists#index'
  end

  devise_scope :user do
    get '/', to: 'devise/sessions#new', as: 'sign_in'
  end

  get 'therapist/:id' => 'therapists#index'

  post 'therapist' => 'therapists#new', as: 'new_therapist'

# T- client page, id is id of the client
  get 'therapist/client/:id'    => 'therapists#show'

# Client calendar, id is client id
  get 'therapist/calendar/:id'  => 'therapists#calendar'

# A client's posts and surveys, id is client id
  get 'therapist/activity/:id'  => 'therapists#activity'

# Therapist profile, id is therapist

# Client profile, id is client's id
  get 'therapist/c_profile/:id' => 'therapists#c_profile'


  devise_for :users
end
