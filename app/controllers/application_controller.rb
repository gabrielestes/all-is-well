class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  def current_client
    Client.first
  end
  helper_method :current_client
end
