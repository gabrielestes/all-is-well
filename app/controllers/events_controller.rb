class EventsController < ApplicationController
  def events_index
    @types = ["good", "not so good", "neither good nor bad"]

  end

  def create
    client_user
    event = Event.new event_params
    event.client_id = @current_client.id
    if event.save!
      redirect_to events_index_path
    end
  end

  private

  def event_params
    params.permit(:client_id, :event_type, :date, :description, :read)
  end
end
