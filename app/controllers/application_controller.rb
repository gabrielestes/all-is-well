class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  def current_client
    @current_client = Client.find_by_id(params[:id])
    @client_name = @current_client.first_name + " " + @current_client.initial + ". " + @current_client.last_name
    @client_dob = @current_client.birth_date
    @client_phone = @current_client.phone
  end


  def return_to_sign_in
    redirect_to '/sign_in'
  end

  helper_method :current_client
  helper_method :return_to_sign_in
end
