class TherapistsController < ApplicationController
  def index
    @therapist = Therapist.find(params[:id])
    @clients = Client.where(therapist_id: @therapist.id)
  end

  #page that shows 4 option link to clients stuff T-client page
  def show
  end

  def new
    @therapist = Therapist.new # therapist_params
    render :partial => 'partials/new_therapist'
    # if @therapist.save
    #   201
    # else
    #   render :new
    # end
  end

  #therapist's view of the event calendar "list"
  def calendar
    @events = Event.where(client_id: params[:id])
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

  private

  def therapist_params
    params.require(:therapist).permit(:first_name, :last_name, :cred, :phone, :email)
  end

end
