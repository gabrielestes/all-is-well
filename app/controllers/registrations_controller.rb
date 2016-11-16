class RegistrationsController < ApplicationController

  def index
    @user = User.find(2)
  end

  def new
    @user = User.new
    if @user.save
      201
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
