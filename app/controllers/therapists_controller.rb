class TherapistsController < ApplicationController
  before_action :authenticate_user!, except: [:new, :index]
  def index
    sort_by = params[:sort_by]
    @therapist = Therapist.find(current_user.userable.id)
    @clients = Client.where(therapist_id: @therapist.id)
    unless sort_by.nil?
      @clients = @clients.order(sort_by => :asc)
    end
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
    current_client
  end

  def c_profile
    current_client
  end

  def activity
    current_client
    @entries = Post.where(client_id: params[:id])
    @events = Event.where(client_id: params[:id])
    @surveys = Survey.where(client_id: params[:id])
    @user = current_user
  end

  def render_events
    current_client
    events = Event.where(client_id: @current_client.id)
    render :json => events
  end

  #therapist can write note sharable or not
  def note
  end

  # def current_therapist
  #   @therapist = Therapist.find(current_user.userable.id)
  # end

  def current_client
    @current_client = Client.find_by_id(params[:id])
    @client_name = @current_client.first_name + " " + @current_client.initial + ". " + @current_client.last_name
    @client_dob = @current_client.birth_date
    @client_phone = @current_client.phone
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

  def therapist_params
    params.require(:therapist).permit(:first_name, :last_name, :cred, :phone, :email)
  end

end
