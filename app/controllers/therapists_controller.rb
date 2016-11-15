class TherapistsController < ApplicationController
  def index
    @therapist = Therapist.find(params[:id])
    @clients = Client.where(therapist_id: @therapist.id)
  end

  #page that shows 4 option link to clients stuff T-client page
  def show
  end

  #therapist's view of the event calendar "list"
  def calendar

  end

  def t_profile
  end

  def c_profile
  end

  def activity
  end

  #therapist can write note sharable or not
  def note
  end
end
