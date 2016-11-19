class ClientsController < ApplicationController

  def index
    @client = Client.find(1)
  end

  def new
    @client = Client.new client_params
    if @client.save!
      @user = User.new user_params
      @user.userable = @client
      @user.save!
      sign_in @user
    end
  end


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
