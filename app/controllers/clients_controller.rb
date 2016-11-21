class ClientsController < ApplicationController

  def index
    @current_client = Client.find(current_user.userable_id)
  end

  def new
    @client = Client.new client_params
    if @client.save!
      @user = User.new user_params
      @user.userable = @client
      @user.save!
      sign_in @user
      redirect_to client_index_path(@client.id)
    end
  end

  def c_profile
    client_user
  end

  def update
    client_user
    e = Contact.where(client_id: params[:format]).first_or_create!
    e.update(phone: params[:contacts][:phone])
    e.save!
    @current_client.update client_params
    @current_client.save!
    redirect_to client_profile_path
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
      :phone
    )
  end

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
