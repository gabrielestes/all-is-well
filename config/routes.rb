Rails.application.routes.draw do

  get 'notes/index'

  get 'notes/create'

  get 'notes/update'

  get 'notes/delete'

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
