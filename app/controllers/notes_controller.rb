class NotesController < ApplicationController
  def notes_index
    current_client
    @client_id = params[:id]
    @therapist_id = current_user.userable_id
  end

  def create
    current_client
    note = Note.new(params[:note])
      # therapist_id: current_user.userable_id,
      # client_id: params[:id],
      # title: params[:title],
      # message: params[:message]
      # shared: params[:shared]
    # )
    if note.save
      redirect_to c_profile_path(params[:client_id])
    end
  end

  def update
  end

  def delete
  end

end
