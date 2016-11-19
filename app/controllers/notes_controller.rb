class NotesController < ApplicationController
  def notes_index
    current_client
    @client_id = params[:id]
    @therapist_id = current_user.userable_id
  end

  def create
    current_client
    note = Note.new note_params
    # (
    #   therapist_id: current_user.userable_id,
    #   client_id: params[:id],
    #   title: params[:title],
    #   message: params[:message],
    #   shared: params[:shared]
    # )
    if note.save
      redirect_to c_profile_path(params[:id])
    end
  end

  def update
  end

  def delete
  end

  private

  def note_params
    params.require(:note).permit(:therapist_id, :client_id, :title, :message, :shared)
  end

end
