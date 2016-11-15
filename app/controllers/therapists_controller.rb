class TherapistsController < ApplicationController
  def index
    @therapist = Therapist.find(params[:id])
    @clients = Client.where(therapist_id: @therapist.id)
  end
end
