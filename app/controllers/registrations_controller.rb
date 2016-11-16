class RegistrationsController < ApplicationController

  def index
    @user = User.find(2)
  end

  def new
    @user = User.new
  end
end
