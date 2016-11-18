class TherapistsController < ApplicationController
  before_action :authenticate_user!, except: [:new, :index]
  def index
    @therapist = Therapist.find(current_user.userable.id)
    @clients = Client.where(therapist_id: @therapist.id)
  end

  #page that shows 4 option link to clients stuff T-client page
  def show
  end

  def t_profile
    @therapist = Therapist.find(current_user.userable.id)
    @therapist_name = @therapist.first_name + " " + @therapist.last_name
  end

  def new
    @therapist = Therapist.new therapist_params
    if @therapist.save
      @user = User.new user_params
      @user.email = @therapist.email
      @user.userable = @therapist
      @user.save
      sign_in @user # some devise thing
      render :index
    else
      render :new
    end
  end

  #therapist's view of the event calendar "list"
  def calendar
    @events = Event.where(client_id: params[:id])
  end

  def c_profile
  end

  def activity
  end

  #therapist can write note sharable or not
  def note
  end

  # def current_therapist
  #   @therapist = Therapist.find(current_user.userable.id)
  # end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

  def therapist_params
    params.require(:therapist).permit(:first_name, :last_name, :cred, :phone, :email)
  end

end
