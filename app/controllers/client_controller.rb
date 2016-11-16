class ClientController < ApplicationController
  def new
    @client = Client.new client_params
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
