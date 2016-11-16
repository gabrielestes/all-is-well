class ClientsController < ApplicationController

  def index
    @client = Client.find(1)
  end

  def new
    @client = Client.new client_params
    if @client.save
      render :index
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
end
