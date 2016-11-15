class TherapistsController < ApplicationController
  def index
    @therapist = Therapist.first
    @clients = Client.where(therapist_id: 1)
  end
end
