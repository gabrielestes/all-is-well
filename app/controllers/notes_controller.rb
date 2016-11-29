class NotesController < ApplicationController

  def notes_index
    current_user.userable_type == 'Therapist'
    current_client
    @client_id = params[:id]
    @notes = Note.where(client_id: params[:id])
    @therapist_id = current_user.userable_id
  end

  def client_notes_index
    client_user
    @notes = Note.where(client_id: @current_client.id, shared: true)
  end

  def create
    current_client
    note = Note.new note_params
    if note.save
      redirect_to notes_index_path(params[:id])
    else
      flash[:danger] = "*All fields must be completed to submit a note."
      render :action=>'notes_index'
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
