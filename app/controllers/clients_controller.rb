class ClientsController < ApplicationController

  def index
    @current_client = Client.find(current_user.userable_id)
  end

  def new
    @client = Client.new client_params
    if @client.save!
      @contact = Contact.new(phone: params[:contact][:phone])
      @contact.client_id = @client.id
      @contact.save!
      @user = User.new user_params
      @user.userable = @client
      @user.save!
      sign_in @user
      redirect_to client_index_path(@client.id)
    end
  end

  def c_profile
    client_user
    @therapist_name = @client_therapist.first_name + " " + @client_therapist.last_name
    @therapist_number = @client_therapist.phone
    @therapist_email = @client_therapist.email
    # @current_client.update client_params
  end

  def update
    client_user
    if !params[:contact].nil?
      e = Contact.where(client_id: params[:contact][:client_id]).first_or_create!
      e.phone = params[:contact][:phone]
      e.save! unless e.phone.length < 7
    else
      @current_client.update client_params
    end
    if @current_client.save!
      redirect_to client_profile_path
    end
  end

  # def new_contact
  #   @contact = Contact.new contact_params
  #   # Contact.new(client_id: @current_client.id, phone: params[:phone]).save!
  # end

  private

  def client_params
    params.require(:client).permit(
      :therapist_id,
      :first_name,
      :last_name,
      :initial,
      :birth_date,
      :phone,
      :general_prac,
      :gender,
      :current_meds
    )
  end

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

  def contact_params
    params.permit(:client_id, :phone)
  end
end
