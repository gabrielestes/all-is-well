class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  def current_client
    Client.first
  end

  def return_to_sign_in
    redirect_to '/sign_in'
  end

  helper_method :current_client
  helper_method :return_to_sign_in
end
